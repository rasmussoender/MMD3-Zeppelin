// JavaScript for toggling the overlay menu
const burgerMenu = document.getElementById("burger-menu");
const closeMenu = document.getElementById("close-menu");
const overlayMenu = document.getElementById("overlay-menu");

burgerMenu.addEventListener("click", () => {
  overlayMenu.style.display = "flex"; 
});

closeMenu.addEventListener("click", () => {
  overlayMenu.style.display = "none"; 
});
