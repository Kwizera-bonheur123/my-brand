var imageInput = document.getElementById("input-file");
    var titleInput = document.getElementById("title");
    var imageData;
    CKEDITOR.replace("content");
    var description = CKEDITOR.instances.content;
    imageInput.addEventListener("change", (e) => {
      var image = imageInput.files[0];
      const reader = new FileReader();
      reader.onload = function(event) {
          imageData = event.target.result;;
      };
      
      reader.readAsDataURL(image);
  });
    
function validateForm() {
    var imageErrorMessage = document.getElementById("image-error-message");
    var titleErrorMessage = document.getElementById("title-error-message");
    var descriptionErrorMessage = document.getElementById("description-error-message");

    // Reset error messages
    imageErrorMessage.textContent = "";
    titleErrorMessage.textContent = "";
    descriptionErrorMessage.textContent = "";

    var isValid = true;

    // Image validation
    if (imageInput.files.length === 0) {
        imageErrorMessage.textContent = "Please upload an image.";
        isValid = false;
    }

    // Title validation
    if (titleInput.value.trim() === "") {
      titleErrorMessage.textContent = "Please enter a title.";
      isValid = false;
  } else if (/\d/.test(titleInput.value)) {
      titleErrorMessage.textContent = "Title should not contain numbers.";
      isValid = false;
  }
    if (description.getData().trim() === "") {
      descriptionErrorMessage.textContent = "Please enter a description.";
      isValid = false;
  }  else if(description.getData().length < 13){
    descriptionErrorMessage.textContent = "Description must have more then 5 characters.";
    isValid = false;
  }

    return isValid;
}

function previewImage(event) {
    var input = event.target;
    var imgView = input.parentElement.querySelector("#img-view img");

    var file = input.files[0];
    var reader = new FileReader();

    reader.onload = function () {
        imgView.src = reader.result;
    };

    reader.readAsDataURL(file);
} 


var posts = [{
  id:"_tishhcvab",
  title:"The quickest way to deliver your message? Make visual",
  image:"./WhatsApp Image 2023-12-28 at 11.53.39 AM.jpeg",
  description:"In publishing and graphic design, Lorem ipsum is a placeholder textcommonly used to demonstrate the visual form of a document or a typeface without relying on mean",
  author: {
    authorProfile:"./person_1 1.svg",
    authorName:"John Doe",
    authorPosition:"CEO and Founder"
  },
  date:new Date(),
  comments:[]  

},
{
  id:"_rgypd5i27",
  title:"The quickest way to deliver your message? Make visual",
  image:"./WhatsApp Image 2023-12-28 at 11.53.39 AM.jpeg",
  description:"In publishing and graphic design, Lorem ipsum is a placeholder textcommonly used to demonstrate the visual form of a document or a typeface without relying on mean",
  author: {
    authorProfile:"./person_1 1.svg",
    authorName:"John Doe",
    authorPosition:"CEO and Founder"
  },
  date:new Date(),
  comments:[]  

},
{
  id:"_hwwbazf3k",
  title:"The quickest way to deliver your message? Make visual",
  image:"./WhatsApp Image 2023-12-28 at 11.53.39 AM.jpeg",
  description:"In publishing and graphic design, Lorem ipsum is a placeholder textcommonly used to demonstrate the visual form of a document or a typeface without relying on mean",
  author: {
    authorProfile:"./person_1 1.svg",
    authorName:"John Doe",
    authorPosition:"CEO and Founder"
  },
  date:new Date(),
  comments:[]  

}];
function addBlog(posts){
  localStorage.setItem("Blogs", JSON.stringify(posts));
}
<<<<<<< HEAD
=======
localStorage.removeItem("Blogs");
>>>>>>> 1cd6ae238c12e2736df6a285f61031bb2c136fa1
addBlog(posts);
function getBlogs(){
  return JSON.parse(localStorage.getItem("Blogs"));
}
document.getElementById("add_article").addEventListener("click",(e)=>{
  let currentData = new Date();
  let newPost =  {
    id : generateUniqueId(),
    title:titleInput.value,
    image:imageData,
    description: description.getData(),
    author: {},
    date: currentData,
    comments:[],
    likes: []
  };
  function generateUniqueId() {
    return '_' + Math.random().toString(36).substring(2, 11);
  }
  let blogs = getBlogs();
  blogs.push(newPost);
  console.log(blogs);
  addBlog(blogs);
  alert("New Blog added successfully ....");
  titleInput.value = "";
  imageInput.value = "";
  description.setData("");
});