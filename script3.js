// Get the contact form element
const contactForm = document.getElementById("contact-form");

// Add event listener to the form's submit event
contactForm.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Display a message indicating that the form was submitted
  alert("Form submitted!");

  // Reload the page
  location.reload();
});
