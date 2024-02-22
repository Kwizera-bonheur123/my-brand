var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}


// When the DOM is fully loaded, execute the script

  // Get the header
  var header = document.getElementById("header");
  
  // Check if the header element exists
  if (header) {
    // Get the offset position of the header
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      console.log("Scroll position:", window.scrollY);
      console.log("Sticky position:", sticky);
      if (window.scrollY >= sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() { myFunction() };
  } else {
    console.error("Header element not found!");
  }
