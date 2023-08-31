// hamburger Menu
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

//functionality for community courses and consultation

let toggleBtn = document.querySelectorAll(".toggle");

toggleBtn.forEach((button, Idx) =>
    button.addEventListener("click", () => {
        if (Idx === 0) {
            if (document.querySelector(".courses").classList.contains("active_service")) {
                document.querySelector(".courses").classList.remove("active_service");
            }
            if (
                document.querySelector(".consulatation").classList.contains("active_service")
            ) {
                document.querySelector(".consulatation").classList.remove("active_service");
            }
            if (toggleBtn[1].classList.contains("active_service")) {
                toggleBtn[1].classList.remove("active_service");
            }
            if (toggleBtn[2].classList.contains("active_service")) {
                toggleBtn[2].classList.remove("active_service");
            }
            let element = document.getElementsByClassName("community");
            element[0].classList.add("active_service");

            button.classList.add("active_service");
        } else if (Idx === 1) {
            if (
                document.querySelector(".community").classList.contains("active_service")
            ) {
                document.querySelector(".community").classList.remove("active_service");
            }
            if (
                document
                .querySelector(".consulatation")
                .classList.contains("active_service")
            ) {
                document.querySelector(".consulatation").classList.remove("active_service");
            }
            if (toggleBtn[0].classList.contains("active_service")) {
                toggleBtn[0].classList.remove("active_service");
            }
            if (toggleBtn[2].classList.contains("active_service")) {
                toggleBtn[2].classList.remove("active_service");
            }
            let element = document.getElementsByClassName("courses");
            element[0].classList.add("active_service");
            button.classList.add("active_service");
        } else {
            if (
                document.querySelector(".community").classList.contains("active_service")
            ) {
                document.querySelector(".community").classList.remove("active_service");
            }
            if (
                document.querySelector(".courses").classList.contains("active_service")
            ) {
                document.querySelector(".courses").classList.remove("active_service");
            }
            if (toggleBtn[1].classList.contains("active_service")) {
                toggleBtn[1].classList.remove("active_service");
            }
            if (toggleBtn[0].classList.contains("active_service")) {
                toggleBtn[0].classList.remove("active_service");
            }

            let element = document.getElementsByClassName("consultations");
            element[0].classList.add("active_service");
            button.classList.add("active_service");
        }
    })
);