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
const signupBase = signupParams.get("base");
const signupEmail = signupParams.get("email");
if (signupBase || signupEmail) {
  const prefillKit = () => {
    const wrap = document.querySelector(".kit-form-wrap");
    if (!wrap) return true;
    const baseField = wrap.querySelector('input[name="fields[base]"], select[name="fields[base]"]');
    const emailField = wrap.querySelector('input[name="email_address"]');
    if (signupBase && baseField) {
      baseField.value = signupBase;
      baseField.dispatchEvent(new Event("input", { bubbles: true }));
      baseField.dispatchEvent(new Event("change", { bubbles: true }));
    }
    if (signupEmail && emailField) {
      emailField.value = signupEmail;
      emailField.dispatchEvent(new Event("input", { bubbles: true }));
      emailField.dispatchEvent(new Event("change", { bubbles: true }));
    }
    return (!signupBase || baseField) && (!signupEmail || emailField);
  };
  if (!prefillKit()) {
    const kitObserver = new MutationObserver(() => {
      if (prefillKit()) kitObserver.disconnect();
    });
    kitObserver.observe(document.body, { childList: true, subtree: true });
    window.setTimeout(() => kitObserver.disconnect(), 15000);
  }
}
