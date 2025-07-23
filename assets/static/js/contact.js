// contact.js

// Load EmailJS SDK dynamically if not in your HTML already
(function () {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
  script.onload = () => {
    emailjs.init("p2gSi9P-alZfYnpG-"); // Replace with your actual EmailJS Public Key
  };
  document.head.appendChild(script);
})();

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_jjix1lk", "template_1ubqb54", form)
      .then(function () {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch(function (error) {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Please try again.");
      });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const nameInput = form.querySelector("#name");
  const emailInput = form.querySelector("#email");
  const messageInput = form.querySelector("#message");
  const submitButton = form.querySelector("button[type='submit']");

  function validateForm() {
    const nameFilled = nameInput.value.trim().length > 0;
    const emailFilled = emailInput.value.trim().length > 0;
    const messageFilled = messageInput.value.trim().length > 0;

    submitButton.disabled = !(nameFilled && emailFilled && messageFilled);
  }

  // Check on input changes
  nameInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
  messageInput.addEventListener("input", validateForm);

  // Initial validation on page load
  validateForm();
});