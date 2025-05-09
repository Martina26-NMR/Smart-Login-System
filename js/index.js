document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let email = document.getElementById("loginEmail").value.trim();
      let password = document.getElementById("loginPassword").value.trim();

      let savedEmail = localStorage.getItem("userEmail");
      let savedPassword = localStorage.getItem("userPassword");

      if (email === savedEmail && password === savedPassword) {
        window.location.href = "welcome.html"; 
      } else {
        document.getElementById("message").textContent = "Incorrect email or password. Please try again.";
      }
    });
  }
});

// Sign Up Form Submission
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let name = document.getElementById("signupName").value.trim();
      let email = document.getElementById("signupEmail").value.trim();
      let password = document.getElementById("signupPassword").value.trim();

      let savedEmail = localStorage.getItem("userEmail");

      if (email === savedEmail) {
        document.getElementById("alert").textContent = "This email is already registered. Please log in.";
        return;
      }

      if (email && password) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        window.location.href = "index.html";
      } else {
        document.getElementById("alert1").textContent = "All inputs is required";

      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let userName = localStorage.getItem("userName");
  if (userName) {
    document.getElementById("welcomeMessage").textContent = `Welcome, ${userName}!`;
  }
});



