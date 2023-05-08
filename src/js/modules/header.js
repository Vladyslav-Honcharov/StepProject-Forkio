const menuBtn = document.querySelector(".menu__btn");
const menuNav = document.querySelector(".menu__nav");
const logo = document.querySelector(".header__logo");
const img = document.querySelector(".header__logo-img");
const logoText = document.querySelector(".header__logo-text");
document.body.addEventListener("click", function (event) {
  const isClickInsideDropdown = menuBtn.contains(event.target);
  const isClickInsideDropdownMenu = menuNav.contains(event.target);
  if (!isClickInsideDropdown && !isClickInsideDropdownMenu) {
    menuBtn.classList.remove("menu__btn_active");
    menuNav.classList.remove("menu__nav_active");
  }
});
menuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  menuBtn.classList.toggle("menu__btn_active");
  menuNav.classList.toggle("menu__nav_active");
});

logo.addEventListener("mouseover", function (e) {
  img.src = "dist/img/header_logo_hover.svg";
  logoText.style.color = "white";
});
logo.addEventListener("mouseout", (e) => {
  img.src = "dist/img/header_logo.svg";
  logoText.style.color = "#8d81ac";
});
