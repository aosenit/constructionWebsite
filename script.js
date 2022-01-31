const menu = document.querySelector(".menu");
const navCover = document.querySelector(".mobileNav");
const menuIcon = document.querySelector(".menuIcon");
menu.addEventListener("click", () => {
  navCover.classList.toggle("openMobileNav");
  menuIcon.classList.toggle("bx-x");
});

navCover.addEventListener("click", () => {
  navCover.classList.remove("openMobileNav");
  menuIcon.classList.remove("bx-x");
});
