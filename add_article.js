CKEDITOR.replace("content");
function validateForm() {
    var imageInput = document.getElementById("input-file");
    var titleInput = document.getElementById("title");
    var contentInput = document.getElementById("content");
    var editor = CKEDITOR.instances["content"];

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
    }

    // Description validation
    if (contentInput.value.trim() === "") {
        descriptionErrorMessage.textContent = "Please enter a description.";
        isValid = false;
    }

    
        // Check if the editor instance exists
        if (editor) {
            // Get the content of the editor
            var content = editor.getData();
  
            // Trim the content to remove leading and trailing whitespaces
            content = content.trim();
  
            // Validate content length
            if (content.length < 5) {
              // Display error message
              document.getElementById("description-error-message").innerText =
                "Description must be at least 5 characters long.";
              return;
            } else {
              // Clear any previous error messages
              document.getElementById("description-error-message").innerText = "";
            }
  
            // Do something with the content
            console.log(content);
          } else {
            console.error("CKEditor instance not found.");
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