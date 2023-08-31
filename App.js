// hamburger Menu
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

//functionality for comm corse and consultation

let toggleBtn = document.querySelectorAll(".toggle");

toggleBtn.forEach((button, Idx) =>
    button.addEventListener("click", () => {
        if (Idx === 0) {
            if (document.querySelector(".corse").classList.contains("active_service")) {
                document.querySelector(".corse").classList.remove("active_service");
                document.querySelector(".corse").classList.add("hiddens");
            }
            if (document.querySelector(".consul").classList.contains("active_service")) {
                document.querySelector(".consul").classList.remove("active_service");
                document.querySelector(".consul").classList.add("hiddens");
            }
            if (toggleBtn[1].classList.contains("active_service")) {
                toggleBtn[1].classList.remove("active_service");
            }
            if (toggleBtn[2].classList.contains("active_service")) {
                toggleBtn[2].classList.remove("active_service");
            }
            let element = document.getElementsByClassName("comm");
            element[0].classList.add("active_service");

            button.classList.add("active_service");
        } else if (Idx === 1) {
            if (document.querySelector(".comm").classList.contains("active_service")) {
                document.querySelector(".comm").classList.remove("active_service");
                document.querySelector(".comm").classList.add("hiddens");
            }
            if (document.querySelector(".consul").classList.contains("active_service")) {
                document.querySelector(".consul").classList.remove("active_service");
                document.querySelector(".consul").classList.add("hiddens");
            }
            if (toggleBtn[0].classList.contains("active_service")) {
                toggleBtn[0].classList.remove("active_service");
            }
            if (toggleBtn[2].classList.contains("active_service")) {
                toggleBtn[2].classList.remove("active_service");
            }
            let element = document.getElementsByClassName("corse");
            element[0].classList.add("active_service");
            button.classList.add("active_service");
        } else if (Idx === 2) {
            if (document.querySelector(".comm").classList.contains("active_service")) {
                document.querySelector(".comm").classList.remove("active_service");
                document.querySelector(".comm").classList.add("hiddens");
            }
            if (document.querySelector(".corse").classList.contains("active_service")) {
                document.querySelector(".corse").classList.remove("active_service");
                document.querySelector(".corse").classList.add("hiddens");
            }
            if (toggleBtn[1].classList.contains("active_service")) {
                toggleBtn[1].classList.remove("active_service");
            }
            if (toggleBtn[0].classList.contains("active_service")) {
                toggleBtn[0].classList.remove("active_service");
            }

            let element = document.getElementsByClassName("consul");
            element[0].classList.add("active_service");
            button.classList.add("active_service");
        }
    })
);