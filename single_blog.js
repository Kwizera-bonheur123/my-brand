const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
var posts = JSON.parse(localStorage.getItem("Blogs"));
let single_post = posts.filter((item) => item.id == id);
console.log(single_post[0].image);
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
        <h1 class="Recent_comments">50 Recentcomments</h1>
        <div class="comment-form">
          <input type="text" placeholder="Add a comment" />
          <div class="comment-buttons">
            <button class="cancel">Cancel</button>
            <button class="Send">Comment</button>
          </div>
        </div>
        <div class="comments">
          <div class="profile">
            <img src="./person_1 1.svg" />
            <div class="comment">
              <div>
                <h2 class="writter-name">John Doe</h2>
                <h2 class="writter-position">OCTOBER 03, 2018 AT 2:21PM</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                autem, eum officia, fugiat saepe enim sapiente iste iure! Quam
                voluptas earum impedit necessitatibus, nihil?
              </p>
            </div>
          </div>
          <div class="profile">
            <img src="./person_1 1.svg" />
            <div class="comment">
              <div>
                <h2 class="writter-name">John Doe</h2>
                <h2 class="writter-position">OCTOBER 03, 2018 AT 2:21PM</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                autem, eum officia, fugiat saepe enim sapiente iste iure! Quam
                voluptas earum impedit necessitatibus, nihil?
              </p>
            </div>
          </div>
          <div class="profile">
            <img src="./person_1 1.svg" />
            <div class="comment">
              <div>
                <h2 class="writter-name">John Doe</h2>
                <h2 class="writter-position">OCTOBER 03, 2018 AT 2:21PM</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                autem, eum officia, fugiat saepe enim sapiente iste iure! Quam
                voluptas earum impedit necessitatibus, nihil?
              </p>
            </div>
          </div>
          <div class="profile">
            <img src="./person_1 1.svg" />
            <div class="comment">
              <div>
                <h2 class="writter-name">John Doe</h2>
                <h2 class="writter-position">OCTOBER 03, 2018 AT 2:21PM</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                autem, eum officia, fugiat saepe enim sapiente iste iure! Quam
                voluptas earum impedit necessitatibus, nihil?
              </p>
            </div>
          </div>
        </div>
`;
signle_blog.appendChild(newDiv);