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


function addBlog(posts){
  localStorage.setItem("Blogs", JSON.stringify(posts));
}
addBlog(posts);
function getBlogs(){
  return JSON.parse(localStorage.getItem("Blogs"));
}
function generateUniqueId() {
  return '_' + Math.random().toString(36).substring(2, 11);
}
console.log(generateUniqueId());
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
  
  let blogs = getBlogs();
  blogs.push(newPost);
  console.log(blogs);
  addBlog(blogs);
  alert("New Blog added successfully ....");
  titleInput.value = "";
  imageInput.value = "";
  description.setData("");
});