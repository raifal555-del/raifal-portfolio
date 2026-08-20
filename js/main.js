const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const clock = document.getElementById("dubai-clock");

function tickDubaiClock() {
  if (!clock) return;
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Dubai",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
  clock.textContent = `GST — ${time}`;
}

tickDubaiClock();
setInterval(tickDubaiClock, 1000);

const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.getElementById("mobile-nav");

menuBtn?.addEventListener("click", () => {
  const open = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!open));
  mobileNav.hidden = open;
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.hidden = true;
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});
