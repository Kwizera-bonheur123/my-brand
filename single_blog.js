const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
var posts = JSON.parse(localStorage.getItem("Blogs"));
let single_post = posts.filter((item) => item.id == id);
let signle_blog = document.getElementById("single_blog");
let newDiv = document.createElement("div");
newDiv.classList.add("card");
newDiv.innerHTML = `
<img src="${single_post[0].image}" />
        <h2 class="title">${single_post[0].title}</h2>
        <div class="description">${single_post[0].description}</div>
        <div class="footer">
          <div class="profile">
            <img src="./person_1 1.svg" />
            <div>
              <h2 class="writter-name">John Doe</h2>
              <h2 class="writter-position">OCTOBER 03, 2018 AT 2:21PM</h2>
            </div>
          </div>
          <div class="reaction">
            <div class="like">
              <i class="fa-solid fa-thumbs-up"></i>
              <p>${single_post[0].likes.length}</p>
            </div>
            <div class="like">
              <i class="fa-solid fa-comment"></i>
              <p>${single_post[0].comments.length}</p>
            </div>
          </div>
        </div>
        <h1 class="Recent_comments">${single_post[0].comments.length} Recentcomments</h1>
        <div class="comment-form">
          <input id="comment" type="text" placeholder="Add a comment" />
          <div class="comment-buttons">
            <button class="cancel">Cancel</button>
            <button onclick="addComment()" class="Send">Comment</button>
          </div>
        </div>
        <div id="comments" class="comments">
        </div>
`;
signle_blog.appendChild(newDiv);

let comment_section = document.getElementById("comments");

for(let i = 0; i < single_post[0].comments.length; i++){
    let newComment = document.createElement("div");
    newComment.innerHTML = `
    <div class="profile">
            <img src="./person_1 1.svg" />
            <div class="comment">
              <div>
                <h2 class="writter-name">John Doe</h2>
                <h2 class="writter-position">${single_post[0].comments[i].date}</h2>
              </div>
              <p>${single_post[0].comments[i].content}</p>
            </div>
          </div>
    `;
    comment_section.appendChild(newComment);
}

function addBlog(posts){
    localStorage.setItem("Blogs", JSON.stringify(posts));
  }

let commentInput = document.getElementById("comment");
function addComment(){
    let index = posts.findIndex((item) => item.id == id);
    posts[index].comments.push({content:commentInput.value,date:new Date()});
    console.log(posts);  
    addBlog(posts);
    window.location.reload();
}