var sidebar = document.getElementById("nav-container");
var close = document.getElementById("close");
var open = document.getElementById("open");

//function add the menu icon and remove close icon

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

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav-bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    console.log("Scrolled");
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}