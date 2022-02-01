const menu = document.querySelector(".menu");
const navCover = document.querySelector(".mobileNav");
const menuIcon = document.querySelector(".menuIcon");

const main = document.getElementById("main");
const logo = document.getElementById("logo");

main.style.backgroundImage =
  "url('https://media.istockphoto.com/photos/suburban-house-picture-id1269776313?k=20&m=1269776313&s=612x612&w=0&h=vcQToSEurDAdnZjp42qKMzKL2dso7a_ytglMyJREAsg=')";

const dashOne = document.getElementById("dashOne");
const dashTwo = document.getElementById("dashTwo");
const dashThree = document.getElementById("dashThree");

dashOne.addEventListener("click", function () {
  main.style.backgroundImage =
    "url('https://media.istockphoto.com/photos/suburban-house-picture-id1269776313?k=20&m=1269776313&s=612x612&w=0&h=vcQToSEurDAdnZjp42qKMzKL2dso7a_ytglMyJREAsg=')";
});

dashTwo.addEventListener("click", function () {
  main.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1611060845291-6745ca3b27ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xhc3N5JTIwaG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60')";
});

dashThree.addEventListener("click", function () {
  main.style.backgroundImage =
    "url('https://media.istockphoto.com/photos/colonial-style-house-picture-id1284097677?b=1&k=20&m=1284097677&s=170667a&w=0&h=1A7BkHG5OU4WCN7m22OOhvVmU21q4UsYVJPrS1kgcKI=')";
});

menu.addEventListener("click", () => {
  navCover.classList.toggle("openMobileNav");
  menuIcon.classList.toggle("bx-x");
});

navCover.addEventListener("click", () => {
  navCover.classList.remove("openMobileNav");
  menuIcon.classList.remove("bx-x");
});

logo.addEventListener("click", () => {
  navCover.classList.remove("openMobileNav");
  menuIcon.classList.remove("bx-x");
});
