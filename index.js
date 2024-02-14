// Get references to the sidebar and icons
var sidebarOpen = false;
var sidebar = document.getElementById("nav-container");
var icons = document.getElementById("icons");

// Function to open the sidebar
function openSidebar() {
    console.log("Good");
    if (!sidebarOpen) {
        sidebar.classList.add("nav-container-responsive");
        icons.classList.add("active");
        sidebarOpen = true;
    }
}

// Function to close the sidebar
function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("active");
        icons.classList.remove("active");
        sidebarOpen = false;
    }
}

// Event listeners for clicking on the sidebar toggle icons
document.getElementById("icons").addEventListener("click", function() {
    if (sidebarOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
});
