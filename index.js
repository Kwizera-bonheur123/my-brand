var sidebar = document.getElementById("nav-container");
var close = document.getElementById("close");
var open = document.getElementById("open");

function openSidebar() {
    sidebar.style.display = "flex";
    close.style.display = "flex";
    open.style.display = "none";
    }

function closeSidebar() {
    sidebar.style.display = "none";
    close.style.display = "none";
    open.style.display = "flex";
}