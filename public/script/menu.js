// variables
let menuToggler = document.querySelector(".toggle-menu");
let navLinks = document.querySelector(".nav-links");
let navigationTab = document.querySelector(".nav");
let sticky = navigationTab.offsetTop;

// listeners
loadEvents();
function loadEvents() {
    // toggle menu
    menuToggler.addEventListener("click", toggleMenu);
}

// functions
function toggleMenu() {
    if(navLinks.style.width === "40%") {
        navLinks.style.width = "0";
        menuToggler.style.right = "5px";
    } else {
        navLinks.style.width = "40%";
        menuToggler.style.right = "42%"
    }
}