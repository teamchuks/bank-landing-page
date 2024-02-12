const navLinks = document.querySelector(".navlinks");
const hamburgerHeader = document.querySelector(".hamburger-header");
const showHamburger = document.querySelector(".show-hamburger");
const hideHamburger = document.querySelector(".hide-hamburger");

showHamburger.addEventListener("click", () => {
  if (navLinks.style.display === "none") {
    navLinks.style.display = "block";
    hideHamburger.style.display = "block";
    showHamburger.style.display = "none";
  } else {
    navLinks.style.display = "none";
    hideHamburger.style.display = "none";
    showHamburger.style.display = "block";
  }
});

hideHamburger.addEventListener("click", () => {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
    hideHamburger.style.display = "none";
    showHamburger.style.display = "block";
  }
});
