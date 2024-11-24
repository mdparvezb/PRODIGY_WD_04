const menu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(".hamberger-icon");
const closeIcon = document.querySelector(".close-img");

menuIcon.addEventListener("click", showMenu);
closeIcon.addEventListener("click", closeMenu);

function showMenu() {
  menu.style.display = "block";
}

function closeMenu() {
  menu.style.display = "none";
}
