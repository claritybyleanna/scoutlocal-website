const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-links");
if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll(".faq-list details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      document.querySelectorAll(".faq-list details").forEach((other) => {
        if (other !== detail) other.open = false;
      });
    }
  });
});

const signupParams = new URLSearchParams(window.location.search);
const endpoint = "https://pmogqxzpwdagpllempgn.supabase.co/functions/v1/resend-sync-contact";

function splitFullName(value) {
  const parts = String(value || "").trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || undefined,
    lastName: parts.length > 1 ? parts.slice(1).join(" ") : undefined,
  };
}

document.querySelectorAll("[data-scout-lead-form]").forEach((form) => {
  const email = form.querySelector('[name="email"]');
  const name = form.querySelector('[name="name"], [name="fullName"]');
  const role = form.querySelector('[name="role"]');
  const audience = form.querySelector('[name="audience"]');
  const affiliation = form.querySelector('[name="affiliation"]');
  const nearestBase = form.querySelector('[name="nearest_base"]');
  const organization = form.querySelector('[name="organization"]');
  const partnerDetails = form.querySelector('[name="partner_details"]');
  const emailOptIn = form.querySelector('[name="email_opt_in"]');
  const baseName = form.querySelector('[name="baseName"]');
  const baseSlug = form.querySelector('[name="baseSlug"]');
  const status = form.querySelector("[data-lead-status]");
  const submit = form.querySelector('button[type="submit"]');
  const partnerFields = form.querySelector("[data-partner-fields]");
  const businessConfirmation = form.querySelector("[data-business-confirmation]");
  const defaultConfirmation = form.querySelector("[data-default-confirmation]");

  const selectedRole = () => role?.value || audience?.value || "military_family";
  const updatePartnerFields = () => {
    const isPartner = selectedRole() === "community_partner" || selectedRole() === "partner";
    if (partnerFields) partnerFields.hidden = !isPartner;
    [organization, partnerDetails].forEach((field) => {
      if (field) field.required = isPartner;
    });
  };

  if (email && signupParams.get("email")) email.value = signupParams.get("email");
  if (audience && signupParams.get("audience")) audience.value = signupParams.get("audience");
  if (role && signupParams.get("role")) role.value = signupParams.get("role");
  if (baseName && signupParams.get("base")) baseName.value = signupParams.get("base");
  if (baseSlug && signupParams.get("base_slug")) baseSlug.value = signupParams.get("base_slug");
  if (nearestBase && signupParams.get("base")) nearestBase.value = signupParams.get("base");
  updatePartnerFields();
  role?.addEventListener("change", updatePartnerFields);
  audience?.addEventListener("change", updatePartnerFields);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!email?.value) return;
    updatePartnerFields();
    if (status) {
      status.textContent = "Saving your spot...";
      status.dataset.state = "loading";
    }
    if (submit) submit.disabled = true;
    if (businessConfirmation) businessConfirmation.hidden = true;
    if (defaultConfirmation) defaultConfirmation.hidden = true;

    const utm = new URLSearchParams(window.location.search);
    const roleValue = selectedRole();
    const baseValue = nearestBase?.value || baseName?.value || form.dataset.defaultBaseName || undefined;
    const fullNameValue = form.querySelector('[name="fullName"]')?.value || name?.value || undefined;
    const nameParts = splitFullName(fullNameValue);
    const body = {
      email: email.value,
      name: fullNameValue,
      fullName: fullNameValue,
      firstName: nameParts.firstName,
      lastName: nameParts.lastName,
      role: roleValue,
      audience: audience?.value || roleValue,
      affiliation: affiliation?.value || undefined,
      nearest_base: baseValue,
      nearestBase: baseValue,
      organization: organization?.value || undefined,
      partner_details: partnerDetails?.value || undefined,
      partnerDetails: partnerDetails?.value || undefined,
      email_opt_in: emailOptIn ? emailOptIn.checked : true,
      baseSlug: baseSlug?.value || form.dataset.defaultBaseSlug || undefined,
      baseName: baseValue,
      sourcePage: form.dataset.sourcePage || window.location.pathname,
      sourceDomain: window.location.hostname,
      referralSource: document.referrer || undefined,
      utmSource: utm.get("utm_source") || undefined,
      utmMedium: utm.get("utm_medium") || undefined,
      utmCampaign: utm.get("utm_campaign") || undefined,
      consentToEmail: emailOptIn ? emailOptIn.checked : true,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Could not save your signup.");
      if (status) {
        status.textContent = "";
        status.dataset.state = "success";
      }
      form.reset();
      updatePartnerFields();
      if (roleValue === "business_owner") {
        if (businessConfirmation) businessConfirmation.hidden = false;
      } else if (defaultConfirmation) {
        defaultConfirmation.hidden = false;
      } else if (status) {
        status.textContent = "You're on the list. We'll send the next useful update.";
      }
    } catch (error) {
      if (status) {
        status.textContent = error.message || "Something went wrong. Please try again.";
        status.dataset.state = "error";
      }
    } finally {
      if (submit) submit.disabled = false;
    }
  });
});

function scoutSiteHref(path) {
  if (window.location.protocol !== "file:") return path;
  const href = window.location.href;
  const marker = "/docs/";
  const docsIndex = href.indexOf(marker);
  if (docsIndex === -1) return path.replace(/^\//, "");
  return `${href.slice(0, docsIndex + marker.length)}${path.replace(/^\//, "")}`;
}

function isPrivatePartnerPage() {
  return window.location.pathname.includes("/partners/amse/list/");
}

if (!isPrivatePartnerPage()) {
  const scoutWidgetScript = document.createElement("script");
  scoutWidgetScript.type = "module";
  scoutWidgetScript.src = scoutSiteHref("/assets/js/scout-events.js?v=20260621-event-email-capture");
  document.head.appendChild(scoutWidgetScript);
}
