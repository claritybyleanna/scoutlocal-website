const SUPABASE_URL = "https://pmogqxzpwdagpllempgn.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtb2dxeHpwd2RhZ3BsbGVtcGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzNTQ2MjUsImV4cCI6MjA5MzkzMDYyNX0.qodUSAhb7R31Jiv1KwLs-9Gnv-oejL-495h7-Ogz5dg";
const EVENT_SUBMIT_ENDPOINT = `${SUPABASE_URL}/functions/v1/submit-scout-event`;
const LEAD_ENDPOINT = `${SUPABASE_URL}/functions/v1/resend-sync-contact`;
const FORT_POLK_TIMEZONE = "America/Chicago";

function timeZoneOffsetMinutes(timeZone, date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const parts = Object.fromEntries(formatter.formatToParts(date).map((part) => [part.type, part.value]));
  const zonedAsUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second),
  );
  return (zonedAsUtc - date.getTime()) / 60000;
}

function zonedDateTimeToUtc(dateValue, timeValue, timeZone = FORT_POLK_TIMEZONE) {
  const [year, month, day] = dateValue.split("-").map(Number);
  const [hour, minute] = timeValue.split(":").map(Number);
  const naiveUtc = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
  const firstOffset = timeZoneOffsetMinutes(timeZone, naiveUtc);
  let utc = new Date(naiveUtc.getTime() - firstOffset * 60000);
  const secondOffset = timeZoneOffsetMinutes(timeZone, utc);
  if (secondOffset !== firstOffset) utc = new Date(naiveUtc.getTime() - secondOffset * 60000);
  return utc;
}

function centralDateParts(referenceDate) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: FORT_POLK_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return Object.fromEntries(formatter.formatToParts(referenceDate).map((part) => [part.type, part.value]));
}

function dateString(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getWeekRange(referenceDate = new Date()) {
  const parts = centralDateParts(referenceDate);
  const centralCalendarDate = new Date(Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day)));
  centralCalendarDate.setUTCDate(centralCalendarDate.getUTCDate() - centralCalendarDate.getUTCDay());
  const endCalendarDate = new Date(centralCalendarDate);
  endCalendarDate.setUTCDate(centralCalendarDate.getUTCDate() + 7);
  return {
    start: zonedDateTimeToUtc(dateString(centralCalendarDate), "00:00"),
    end: zonedDateTimeToUtc(dateString(endCalendarDate), "00:00"),
  };
}

export function filterEventsForWeek(events, range) {
  return events
    .filter((event) => {
      const startsAt = new Date(event.starts_at);
      const endsAt = new Date(event.ends_at || event.starts_at);
      return startsAt < range.end && endsAt > range.start;
    })
    .sort((a, b) => new Date(a.starts_at).getTime() - new Date(b.starts_at).getTime());
}

function addOneHour(timeValue) {
  const [hour, minute] = String(timeValue || "09:00").split(":").map(Number);
  const nextHour = (hour + 1) % 24;
  return `${String(nextHour).padStart(2, "0")}:${String(minute || 0).padStart(2, "0")}`;
}

function compactLines(lines, separator = "\n") {
  return lines.filter((line) => typeof line === "string" && line.trim().length > 0).join(separator);
}

export function buildWidgetEventPayload(values) {
  const eventDetails = compactLines([
    values.hostedBy?.trim() ? `Hosted by: ${values.hostedBy.trim()}` : "",
    values.category?.trim() ? `Category: ${values.category.trim()}` : "",
    values.cost?.trim() ? `Cost: ${values.cost.trim()}` : "",
  ]);
  const description = compactLines([values.description?.trim(), eventDetails], "\n\n");
  return {
    title: values.title?.trim() || "",
    date: values.date?.trim() || "",
    startTime: values.startTime?.trim() || "",
    endTime: addOneHour(values.startTime),
    locationName: values.locationName?.trim() || "",
    address: values.address?.trim() || "",
    description,
    contact: values.hostedBy?.trim() || "",
    externalUrl: "",
  };
}

function authHeaders(extra = {}) {
  return {
    apikey: SUPABASE_ANON,
    Authorization: `Bearer ${SUPABASE_ANON}`,
    ...extra,
  };
}

async function restRows(table, params) {
  const url = new URL(`${SUPABASE_URL}/rest/v1/${table}`);
  Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
  const response = await fetch(url.toString(), { headers: authHeaders() });
  const data = await response.json().catch(() => []);
  if (!response.ok) throw new Error(data?.message || data?.error || "Could not load Scout events.");
  return Array.isArray(data) ? data : [];
}

async function fetchFortPolkBaseId() {
  const exact = await restRows("bases", { select: "id,name", name: "eq.Fort Polk", state: "eq.LA", limit: "1" });
  if (exact[0]?.id) return exact[0].id;
  const legacy = await restRows("bases", { select: "id,name", name: "eq.Fort Johnson", state: "eq.LA", limit: "1" });
  if (legacy[0]?.id) return legacy[0].id;
  throw new Error("Fort Polk events are not configured yet.");
}

async function fetchScoutEvents(range) {
  const baseId = await fetchFortPolkBaseId();
  const rows = await restRows("intel_items", {
    select: "id,title,description,starts_at,ends_at,location_name,address,contact,external_url,image_url,tags",
    base_id: `eq.${baseId}`,
    type: "eq.event",
    status: "eq.published",
    starts_at: `lt.${range.end.toISOString()}`,
    ends_at: `gte.${range.start.toISOString()}`,
    order: "starts_at.asc",
  });
  return filterEventsForWeek(rows, range);
}

function formatDateKey(value) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat("en-US", {
    timeZone: FORT_POLK_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(value)).map((part) => [part.type, part.value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
}

export function countEventsForDate(events, date) {
  return events.filter((event) => formatDateKey(event.starts_at) === date).length;
}

function formatDayLabel(dateValue) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: FORT_POLK_TIMEZONE,
    weekday: "long",
  }).format(new Date(`${dateValue}T12:00:00Z`));
}

function formatShortDay(dateValue) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(new Date(`${dateValue}T12:00:00Z`));
}

function formatTime(value) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: FORT_POLK_TIMEZONE,
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

function weekDates(range) {
  const dates = [];
  const start = new Date(range.start);
  for (let index = 0; index < 7; index += 1) {
    const date = new Date(start);
    date.setUTCDate(start.getUTCDate() + index);
    dates.push(dateString(date));
  }
  return dates;
}

function siteUrl(path) {
  if (window.location.protocol !== "file:") return path;
  const href = window.location.href;
  const marker = "/docs/";
  const docsIndex = href.indexOf(marker);
  if (docsIndex === -1) return path.replace(/^\//, "");
  return `${href.slice(0, docsIndex + marker.length)}${path.replace(/^\//, "")}`;
}

function groupByDay(events) {
  return events.reduce((groups, event) => {
    const key = formatDateKey(event.starts_at);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(event);
    return groups;
  }, new Map());
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function widgetTemplate() {
  return `
    <button class="scout-site-fab" type="button" aria-label="Open Scout events" data-scout-open>
      <img src="${siteUrl("/assets/img/scout-fab-active.png")}" alt="">
    </button>
    <div class="scout-weekly-nudge" data-scout-weekly-nudge hidden>
      <button type="button" aria-label="Close weekly email prompt" data-scout-weekly-dismiss>×</button>
      <strong>Want this in a weekly email?</strong>
      <span>Join the beta list for Fort Polk updates.</span>
      <button type="button" data-scout-weekly-open>Join beta</button>
    </div>
    <div class="scout-widget-shell" data-scout-widget hidden>
      <section class="scout-widget-panel" aria-modal="true" role="dialog" aria-label="Scout Fort Polk events">
        <button class="scout-widget-close" type="button" aria-label="Close Scout" data-scout-close>×</button>
        <div data-scout-widget-content></div>
      </section>
    </div>
  `;
}

function eventRow(event) {
  const row = createElement("article", "scout-widget-event");
  const time = createElement("div", "scout-widget-time", formatTime(event.starts_at));
  const content = createElement("div", "scout-widget-event-copy");
  const title = createElement("h3", "", event.title || "Fort Polk event");
  const location = event.location_name?.trim() || "";
  const address = event.address?.trim() || "";
  const meta = createElement("div", "scout-widget-location");
  if (location) meta.appendChild(createElement("p", "", location));
  if (address && address !== location) meta.appendChild(createElement("p", "", address));
  if (!location && !address) meta.appendChild(createElement("p", "", "Fort Polk"));
  const tags = createElement("div", "scout-widget-tags");
  const visibleTags = Array.isArray(event.tags) ? event.tags.filter(Boolean).slice(0, 3) : [];
  visibleTags.forEach((tag) => tags.appendChild(createElement("span", "", String(tag))));
  content.append(title, meta);
  if (visibleTags.length) content.appendChild(tags);
  row.append(time, content);
  return row;
}

function renderEventsView(state) {
  const content = state.root.querySelector("[data-scout-widget-content]");
  if (!content) return;
  content.replaceChildren();

  const top = createElement("div", "scout-widget-top");
  top.innerHTML = `<h2>what’s happening this week at fort polk?</h2>`;

  const days = createElement("div", "scout-widget-days");
  state.weekDates.forEach((date) => {
    const eventCount = state.loading ? 0 : countEventsForDate(state.events, date);
    const button = document.createElement("button");
    button.type = "button";
    button.className = date === state.selectedDate ? "is-active" : "";
    button.setAttribute("aria-label", `${formatShortDay(date)}: ${eventCount} ${eventCount === 1 ? "event" : "events"}`);
    button.innerHTML = `<span>${formatShortDay(date).slice(0, 1)}</span><i>${eventCount}</i>`;
    button.addEventListener("click", () => {
      state.selectedDate = date;
      renderEventsView(state);
    });
    days.appendChild(button);
  });

  const dayHead = createElement("div", "scout-widget-day-head");
  dayHead.innerHTML = `<strong>${formatDayLabel(state.selectedDate)}</strong><span>${formatShortDay(state.selectedDate).replace(",", " ·").toLowerCase()}</span>`;

  const list = createElement("div", "scout-widget-list");
  if (state.loading) {
    list.appendChild(createElement("p", "scout-widget-empty", "Loading this week's events..."));
  } else {
    const events = state.eventsByDay.get(state.selectedDate) || [];
    if (events.length) {
      events.forEach((event) => list.appendChild(eventRow(event)));
    } else {
      list.appendChild(createElement("p", "scout-widget-empty", "Nothing published for this day yet."));
    }
  }

  const add = createElement("div", "scout-widget-add");
  add.innerHTML = `
    <button class="scout-widget-email-link" type="button">Want this in an email?</button>
    <button class="scout-widget-add-button" type="button" aria-label="Add an event" title="Add an event" data-tooltip="Add an event"><b>+</b></button>
  `;
  add.querySelector(".scout-widget-email-link").addEventListener("click", () => renderWeeklyFormView(state));
  add.querySelector(".scout-widget-add-button").addEventListener("click", () => renderEventFormView(state));

  content.append(top, days, dayHead, list, add);
}

function renderEventFormView(state) {
  const content = state.root.querySelector("[data-scout-widget-content]");
  if (!content) return;
  content.innerHTML = `
    <div class="scout-widget-top is-form">
      <h2>add an event to scout</h2>
      <button class="scout-widget-back" type="button" data-scout-back>‹ this week</button>
    </div>
    <form class="scout-widget-form" data-scout-widget-form>
      <label><span>event name</span><input name="title" type="text" required maxlength="120" placeholder="e.g. Spouses’ coffee & connect"></label>
      <label><span>hosted by</span><input name="hostedBy" type="text" required maxlength="160" placeholder="MWR, ACS, CYS, your unit..."></label>
      <div class="scout-widget-grid">
        <label><span>day</span><input name="date" type="date" required value="${state.selectedDate}"></label>
        <label><span>time</span><input name="startTime" type="time" required value="10:00"></label>
      </div>
      <label><span>location name (optional)</span><input name="locationName" type="text" maxlength="140" placeholder="Facility, room, or landmark"></label>
      <label><span>address</span><input name="address" type="text" required maxlength="180" placeholder="Building, street, or full address"></label>
      <div class="scout-widget-grid">
        <label><span>category</span><select name="category"><option value="kids">kids</option><option value="community">community</option><option value="fitness">fitness</option><option value="food">food</option><option value="spouses">spouses</option></select></label>
        <label><span>cost</span><input name="cost" type="text" maxlength="60" placeholder="Free, or $"></label>
      </div>
      <label><span>anything else? (optional)</span><textarea name="description" rows="4" maxlength="1200" placeholder="Age range, registration, what to bring..."></textarea></label>
      <button class="scout-widget-submit" type="submit">send for review</button>
      <p class="scout-widget-status" data-scout-widget-status></p>
    </form>
  `;
  content.querySelector("[data-scout-back]").addEventListener("click", () => renderEventsView(state));
  content.querySelector("[data-scout-widget-form]").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = form.querySelector("[data-scout-widget-status]");
    const submit = form.querySelector('button[type="submit"]');
    const values = Object.fromEntries(new FormData(form).entries());
    const payload = buildWidgetEventPayload(values);
    if (status) status.textContent = "Sending for review...";
    if (submit) submit.disabled = true;
    try {
      const response = await fetch(EVENT_SUBMIT_ENDPOINT, {
        method: "POST",
        headers: authHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Could not submit this event.");
      if (status) status.textContent = "Sent for review. If approved, it will be live within 24 hours.";
      form.reset();
      window.setTimeout(() => renderEventsView(state), 1800);
    } catch (error) {
      if (status) status.textContent = error.message || "Something went wrong. Please try again.";
    } finally {
      if (submit) submit.disabled = false;
    }
  });
}

function renderWeeklyFormView(state) {
  const content = state.root.querySelector("[data-scout-widget-content]");
  if (!content) return;
  content.innerHTML = `
    <div class="scout-widget-top is-form">
      <h2>want to get this in a weekly email?</h2>
      <button class="scout-widget-back" type="button" data-scout-back>‹ this week</button>
    </div>
    <form class="scout-widget-form" data-scout-weekly-form>
      <label><span>email</span><input name="email" type="email" required autocomplete="email" placeholder="you@example.com"></label>
      <label><span>name</span><input name="name" type="text" required autocomplete="name" placeholder="Your name"></label>
      <label><span>i am a...</span><select name="role" required><option value="military_family" selected>Military family</option><option value="local">Local to the area</option><option value="business_owner">Business owner</option><option value="community_partner">Community partner</option></select></label>
      <label><span>your connection to the military</span><select name="affiliation" required><option value="active_duty">Active duty / National Guard / Reserve</option><option value="veteran">Veteran / retired</option><option value="military_spouse">Military spouse or partner</option><option value="civilian">None of the above / civilian</option><option value="prefer_not_to_say">Prefer not to say</option></select></label>
      <label><span>nearest base</span><input name="nearest_base" type="text" required value="Fort Polk"></label>
      <label class="scout-widget-checkbox"><input name="email_opt_in" type="checkbox" checked><span>Yes, email me ScoutLocal updates.</span></label>
      <button class="scout-widget-submit" type="submit">join beta</button>
      <p class="scout-widget-status" data-scout-weekly-status></p>
    </form>
  `;
  content.querySelector("[data-scout-back]").addEventListener("click", () => renderEventsView(state));
  content.querySelector("[data-scout-weekly-form]").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = form.querySelector("[data-scout-weekly-status]");
    const submit = form.querySelector('button[type="submit"]');
    const values = Object.fromEntries(new FormData(form).entries());
    if (status) status.textContent = "Saving your spot...";
    if (submit) submit.disabled = true;
    try {
      const response = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          fullName: values.name,
          audience: values.role,
          nearestBase: values.nearest_base,
          baseName: "Fort Polk",
          baseSlug: "fort-polk",
          sourcePage: "scout-weekly-events-widget",
          sourceDomain: window.location.hostname,
          email_opt_in: values.email_opt_in === "on",
          consentToEmail: values.email_opt_in === "on",
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Could not save your signup.");
      sessionStorage.setItem("scout-weekly-email-prompt-dismissed", "1");
      if (status) status.textContent = "You're on the list. We'll send the next useful update.";
      form.reset();
    } catch (error) {
      if (status) status.textContent = error.message || "Something went wrong. Please try again.";
    } finally {
      if (submit) submit.disabled = false;
    }
  });
}

function openWidget(state, view = "events") {
  state.shell.hidden = false;
  document.body.classList.add("scout-modal-open");
  state.nudge.hidden = true;
  if (view === "weekly") renderWeeklyFormView(state);
  else renderEventsView(state);
}

function closeWidget(state) {
  state.shell.hidden = true;
  document.body.classList.remove("scout-modal-open");
}

async function loadEvents(state) {
  try {
    state.events = await fetchScoutEvents(state.range);
    state.eventsByDay = groupByDay(state.events);
    const today = formatDateKey(new Date());
    state.selectedDate = state.weekDates.includes(today) ? today : state.weekDates[0];
  } catch {
    state.events = [];
    state.eventsByDay = new Map();
  } finally {
    state.loading = false;
    if (!state.shell.hidden) renderEventsView(state);
  }
}

function setupWeeklyNudge(state) {
  const storageKey = "scout-weekly-email-prompt-dismissed";
  state.root.querySelector("[data-scout-weekly-dismiss]").addEventListener("click", () => {
    sessionStorage.setItem(storageKey, "1");
    state.nudge.hidden = true;
  });
  state.root.querySelector("[data-scout-weekly-open]").addEventListener("click", () => {
    sessionStorage.setItem(storageKey, "1");
    openWidget(state, "weekly");
  });
  if (sessionStorage.getItem(storageKey) !== "1") {
    window.setTimeout(() => {
      if (!state.shell.hidden || sessionStorage.getItem(storageKey) === "1") return;
      state.nudge.hidden = false;
    }, 20000);
  }
}

function initScoutWidget() {
  if (document.querySelector("[data-scout-widget-root]")) return;
  const root = document.createElement("div");
  root.dataset.scoutWidgetRoot = "true";
  root.innerHTML = widgetTemplate();
  document.body.appendChild(root);

  const range = getWeekRange(new Date());
  const state = {
    root,
    shell: root.querySelector("[data-scout-widget]"),
    nudge: root.querySelector("[data-scout-weekly-nudge]"),
    range,
    weekDates: weekDates(range),
    selectedDate: weekDates(range)[0],
    events: [],
    eventsByDay: new Map(),
    loading: true,
  };

  root.querySelector("[data-scout-open]").addEventListener("click", () => openWidget(state));
  root.querySelector("[data-scout-close]").addEventListener("click", () => closeWidget(state));
  state.shell.addEventListener("click", (event) => {
    if (event.target === state.shell) closeWidget(state);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !state.shell.hidden) closeWidget(state);
  });
  setupWeeklyNudge(state);
  loadEvents(state);
}

if (typeof document !== "undefined") {
  initScoutWidget();
}
