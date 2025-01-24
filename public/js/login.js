document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      if (password.length < 8) {
          alert("Password must be at least 8 characters long.");
          return;
      }

      alert("Login successful! Welcome, " + email);
      form.reset();
  });

  function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  const inputFields = document.querySelectorAll("input");

  inputFields.forEach((input) => {
      input.addEventListener("focus", () => {
          input.style.borderColor = "#0066ff";
      });

      input.addEventListener("blur", () => {
          input.style.borderColor = "#ddd";
      });
  });

  const facebookBtn = document.querySelector(".facebook-btn");
  const googleBtn = document.querySelector(".google-btn");

  facebookBtn.addEventListener("click", () => {
      alert("Facebook login is not implemented in this demo.");
  });

  googleBtn.addEventListener("click", () => {
      alert("Google login is not implemented in this demo.");
  });
});
