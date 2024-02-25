document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector('.form');
  form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent the default form submission behavior
      validateForm(e); // Call the validation function
  });
});

function validateForm(e) {
  var imageInput = document.getElementById("input-file");
  var titleInput = document.getElementById("title");
  var contentInput = document.getElementById("content");

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
