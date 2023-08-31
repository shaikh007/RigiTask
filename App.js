// hamburger Menu
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

//functionality for comm corse and consultation

const toggleBtn1 = document.getElementById("toggle1");
const toggleBtn2 = document.getElementById("toggle2");
const toggleBtn3 = document.getElementById("toggle3");

const community = document.getElementById("comm");
const courses = document.getElementById("corse");
const consul = document.getElementById("consul");

toggleBtn1.addEventListener("click", () => {
    community.classList.remove("hidden");
    courses.classList.add("hidden");
    consul.classList.add("hidden");
    toggleBtn3.classList.remove("active_service");
    toggleBtn2.classList.remove("active_service");
    toggleBtn1.classList.add("active_service");
});

toggleBtn2.addEventListener("click", () => {
    community.classList.add("hidden");
    courses.classList.remove("hidden");
    toggleBtn1.classList.remove("active_service");
    toggleBtn2.classList.add("active_service");
    toggleBtn3.classList.remove("active_service");
    consul.classList.add("hidden");
});

toggleBtn3.addEventListener("click", () => {
    community.classList.add("hidden");
    courses.classList.add("hidden");
    consul.classList.remove("hidden");
    toggleBtn2.classList.remove("active_service");
    toggleBtn1.classList.remove("active_service");
    toggleBtn3.classList.add("active_service");
});