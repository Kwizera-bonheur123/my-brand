document.addEventListener("DOMContentLoaded", function () {
    console.log("clicked");
    const icons = document.querySelector(".icons");
    const navContainer = document.querySelector(".nav-container");

    icons.addEventListener("click", function () {
        navContainer.classList.toggle("active");
    });
});
