var sidebar = document.getElementById("nav-container");
var close = document.getElementById("close");
var open = document.getElementById("open");
var posts = JSON.parse(localStorage.getItem("Blogs"));


var blog_posts = document.getElementById("blog-posts");
for(let i = 0;i < posts.length;i++){
    console.log(posts[i].description);
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
    <a href="./signle_blog.html">
            <img src="${posts[i].image}" />
          </a>
          <h2 class="title">${posts[i].title.substring(0,50) + ' ....'}</h2>
          <div class="description">${posts[i].description.substring(0, 196) + ' .....'}</div>
          <div class="footer">
            <div class="profile">
              <img src="./person_1 1.svg" />
              <div>
                <h2 class="writter-name">John Doe</h2>
                <h2 class="writter-position">CEO and Founder</h2>
              </div>
            </div>
            <div class="reaction">
              <div class="like">
                <i class="fa-solid fa-thumbs-up"></i>
                <p>521</p>
              </div>
              <div class="like">
                <i class="fa-solid fa-comment"></i>
                <p>450</p>
              </div>
            </div>
          </div>
    `;
    blog_posts.appendChild(newDiv)
}

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


function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    var nameError = document.getElementById('name-error-message');
    var emailError = document.getElementById('email-error-message');
    var messageError = document.getElementById('message-error-message');

    var isValid = true;

    // Validate name: should not contain any numbers
    if (!/^[a-zA-Z]+$/.test(name)) {
        nameError.innerText = "Name must not contain numbers";
        isValid = false;
    } else {
        nameError.innerText = "";
    }

    // Validate email: using a simple regex for basic validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.innerText = "Invalid email address";
        isValid = false;
    } else {
        emailError.innerText = "";
    }

    // Validate message: should be at least 4 characters long
    if (message.length < 4) {
        messageError.innerText = "Message must be at least 4 characters long";
        isValid = false;
    } else {
        messageError.innerText = "";
    }
}



let blogs = document.querySelectorAll('.my-blog .slider .item');
    let next = document.getElementById('next-blog');
    let prev = document.getElementById('prev-blog');
    let active = 1;
    function loadShow(){
        let stt = 0;
        console.log(blogs[active]);
        blogs[active].style.transform = `none`;
        blogs[active].style.zIndex = 10;
        blogs[active].style.filter = 'none';
        blogs[active].style.opacity = 1;
        for(var i = active + 1; i < blogs.length; i++){
            stt++;
            blogs[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            blogs[i].style.zIndex = 1;
            blogs[i].style.filter = 'blur(5px)';
            blogs[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            blogs[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            blogs[i].style.zIndex = 1;
            blogs[i].style.filter = 'blur(5px)';
            blogs[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < blogs.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }



    document.addEventListener("DOMContentLoaded", function() {
        let projects = document.querySelectorAll('.projects-section .slider .item');
        let next_project = document.getElementById('next-project');
        let prev_project = document.getElementById('prev-project');
    
        let active_project = 3;
    
        function loadShow(){
            let stt = 0;
            projects[active_project].style.transform = `none`;
            projects[active_project].style.zIndex = 10;
            projects[active_project].style.filter = 'none';
            projects[active_project].style.opacity = 1;
            for(var i = active_project + 1; i < projects.length; i++){
                stt++;
                projects[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
                projects[i].style.zIndex = 1;
                projects[i].style.filter = 'blur(5px)';
                projects[i].style.opacity = stt > 2 ? 0 : 0.6;
            }
            stt = 0;
            for(var i = active_project - 1; i >= 0; i--){
                stt++;
                projects[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
                projects[i].style.zIndex = 1;
                projects[i].style.filter = 'blur(5px)';
                projects[i].style.opacity = stt > 2 ? 0 : 0.6;
            }
        }
    
        loadShow();
    
        next_project.onclick = function(){
            active_project = active_project + 1 < projects.length ? active_project + 1 : active_project;
            loadShow();
        }
    
        prev_project.onclick = function(){
            active_project = active_project - 1 >= 0 ? active_project - 1 : active_project;
            loadShow();
        }
    });
    