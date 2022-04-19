/* burger */

const btn = document.querySelector(".header__burger");
const btnClose = document.querySelector(".burger__close");
const menu = document.querySelector(".burger__menu");

btn.addEventListener("click", () => {
  menu.classList.add("burger--active");
});

btnClose.addEventListener("click", () => {
  menu.classList.remove("burger--active");
});
