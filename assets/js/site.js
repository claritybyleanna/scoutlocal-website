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

document.querySelectorAll("[data-scout-lead-form]").forEach((form) => {
  const email = form.querySelector('[name="email"]');
  const audience = form.querySelector('[name="audience"]');
  const baseName = form.querySelector('[name="baseName"]');
  const baseSlug = form.querySelector('[name="baseSlug"]');
  const status = form.querySelector("[data-lead-status]");
  const submit = form.querySelector('button[type="submit"]');

  if (email && signupParams.get("email")) email.value = signupParams.get("email");
  if (audience && signupParams.get("audience")) audience.value = signupParams.get("audience");
  if (baseName && signupParams.get("base")) baseName.value = signupParams.get("base");
  if (baseSlug && signupParams.get("base_slug")) baseSlug.value = signupParams.get("base_slug");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!email?.value) return;
    if (status) {
      status.textContent = "Saving your spot...";
      status.dataset.state = "loading";
    }
    if (submit) submit.disabled = true;

    const utm = new URLSearchParams(window.location.search);
    const body = {
      email: email.value,
      fullName: form.querySelector('[name="fullName"]')?.value,
      audience: audience?.value || "family",
      baseName: baseName?.value || form.dataset.defaultBaseName || undefined,
      baseSlug: baseSlug?.value || form.dataset.defaultBaseSlug || undefined,
      sourcePage: form.dataset.sourcePage || window.location.pathname,
      sourceDomain: window.location.hostname,
      referralSource: document.referrer || undefined,
      utmSource: utm.get("utm_source") || undefined,
      utmMedium: utm.get("utm_medium") || undefined,
      utmCampaign: utm.get("utm_campaign") || undefined,
      consentToEmail: true,
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
        status.textContent = "You're on the list. We'll send the next useful update.";
        status.dataset.state = "success";
      }
      form.reset();
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
