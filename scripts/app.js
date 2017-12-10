$(document).ready(function () {
    var navbar = document.getElementById("app-navbar");
    var navbarHeight = navbar.offsetHeight;

    function setMenuBackground() {
        if (window.pageYOffset >= navbarHeight) {
            navbar.classList.add("app-nav-background")
        } else {
            navbar.classList.remove("app-nav-background");
        }
    }

    setMenuBackground();

    window.onscroll = function () {
        setMenuBackground();
    };
})