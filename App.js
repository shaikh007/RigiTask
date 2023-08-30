// const hamburgerIcon = document.getElementById("hamburger-icon");
// const rightMenu = document.querySelector(".navs .right");

// hamburgerIcon.addEventListener("click", () => {
//     rightMenu.classList.toggle("active");
// });

const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});