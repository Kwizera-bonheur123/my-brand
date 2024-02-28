var imageInput = document.getElementById("input-file");
    var titleInput = document.getElementById("title");
    var imageData;
    CKEDITOR.replace("content");
    var description = CKEDITOR.instances.content;
    imageInput.addEventListener("change", (e) => {
      var image = imageInput.files[0];
      console.log(image);
      
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
  id:1,
  image:"",
  description:"ksbzdjkjjksefc",
  author: {
    authorProfile:"gsgx",
    authorName:"Kapucino"
  },
  date:"kaehb",
  comments:[
    {
      comentorProfile: "",
      commentorName:"",
      date:"",
      commentContent:""
    }
  ]  

}];

function addBlog(posts){
  localStorage.setItem("Blogs", JSON.stringify(posts));
}
function getBlogs(){
  return JSON.parse(localStorage.getItem("Blogs"));
}
console.log("Retrieving blogs from local storage...");
const blogs = getBlogs();
console.log("Retrieved blogs:", blogs);
document.getElementById("add_article").addEventListener("click",(e)=>{
  let currentData = new Date();
  let newPost =  {
    id:1,
    title:titleInput.value,
    image:imageData,
    description: description.getData(),
    author: {},
    date: currentData,
    comments:[],
    likes: []
  };
  console.log(newPost); 
})