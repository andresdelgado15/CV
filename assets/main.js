// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Gentle reveal on scroll
const revealTargets = document.querySelectorAll(".section, .facts, .card, .timeline > li");
if ("IntersectionObserver" in window) {
  revealTargets.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  revealTargets.forEach((el) => io.observe(el));
}

// Contact form (Formspree) with consent check
const form = document.getElementById("contact-form");
const statusEl = form.querySelector(".form-status");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  statusEl.className = "form-status";

  if (!form.checkValidity()) {
    const consent = form.querySelector('[name="privacy_consent"]');
    statusEl.textContent = !consent.checked
      ? "Please accept the Privacy Policy to send your message."
      : "Please complete your name, a valid email and a message.";
    statusEl.classList.add("err");
    return;
  }

  const button = form.querySelector("button");
  button.disabled = true;
  statusEl.textContent = "Sending…";

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(String(res.status));
    form.reset();
    statusEl.textContent = "Thank you — your message has been sent. I'll reply soon.";
    statusEl.classList.add("ok");
  } catch {
    statusEl.textContent = "Sorry, the message could not be sent. Please email andresd.7878@gmail.com.";
    statusEl.classList.add("err");
  } finally {
    button.disabled = false;
  }
});
