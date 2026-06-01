const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

function syncHeader() {
  if (header.classList.contains("page-header")) {
    header.classList.add("is-scrolled");
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeMenu() {
  document.body.classList.remove("nav-open");
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeMenu();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
