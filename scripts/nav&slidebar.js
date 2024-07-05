let initialScroll = 0;

// Navbar Show & Hide section
window.addEventListener("scroll", navScroll);
function navScroll() {
  let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (initialScroll < lastScroll) {
    gsap.to(".nav-bar", {
      y: -80,
      duration: 0.3,
    });
  }
  if (initialScroll > lastScroll) {
    gsap.to(".nav-bar", {
      y: 0,
      duration: 0.3,
    });
  }
  initialScroll = lastScroll;
}

// Side Bar show & hide section
const sideBar = document.getElementById("navbar-collapse");
document.querySelector("#sidebar-btn").addEventListener("click", () => {
  sideBar.classList.add("hide");
  window.addEventListener("click", closeSidebar);
  window.removeEventListener("scroll", navScroll);
});
document.querySelector("#navbar-collapse i").addEventListener("click", () => {
  sideBar.classList.remove("hide");
  window.removeEventListener("click", closeSidebar);
  window.addEventListener("scroll", navScroll);
});
function closeSidebar(e) {
  if (!sideBar.contains(e.target) && e.target.tagName !== "I") {
    sideBar.classList.remove("hide");
    window.removeEventListener("click", closeSidebar);
    window.addEventListener("scroll", navScroll);
  }
}
