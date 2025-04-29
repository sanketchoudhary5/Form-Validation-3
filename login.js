const submitBtn = document.getElementById("submitBtn");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const passwordInput = document.getElementById("password");
const passError = document.getElementById("passwordError");

// Get the <i> icons next to inputs
const emailIcon = emailInput.nextElementSibling;
const passIcon = passwordInput.nextElementSibling;

// **Event Listeners for Real-Time Validation**
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

// **Event on Submit Button**
submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent page reload

  if (validateEmail() && validatePassword()) {
    alert("Login Successfully");

    // Clear input fields
    emailInput.value = "";
    passwordInput.value = "";

    // Reset error messages
    emailError.innerHTML = "";
    passError.innerHTML = "";

    // Remove icons
    emailIcon.classList.remove("fa-check", "fa-xmark");
    passIcon.classList.remove("fa-eye-slash", "fa-eye");
  }
});


// **Function to validate Email**
function validateEmail() {
  let email = emailInput.value;
  emailIcon.classList.remove("fa-check", "fa-xmark");

  if (email.length === 0) {
    emailError.innerHTML = "Email is required";
    emailIcon.classList.add("fa-solid", "fa-xmark");
    emailIcon.style.color = "red"; // Red for error
    return false;
  }

  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Enter Valid Email";
    emailIcon.classList.add("fa-solid", "fa-xmark");
    emailIcon.style.color = "red"; // Red for error
    return false;
  }

  emailError.innerHTML = "";
  emailIcon.classList.add("fa-solid", "fa-check");
  emailIcon.style.color = "green"; // Green for success
  return true;
}

// **Function to validate Password**
function validatePassword() {
  let password = passwordInput.value;
  passIcon.classList.remove("fa-check", "fa-xmark");

  if (password.length === 0) {
    passError.innerHTML = "Password is required";
    passIcon.classList.add("fa-solid", "fa-xmark");
    passIcon.style.color = "red"; // Red for error
    return false;
  }

  if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
    passError.innerHTML = "Password should contain 1 Uppercase, 1 Lowercase, 1 Digit & 1 Special Character";
    passIcon.classList.add("fa-solid", "fa-xmark");
    passIcon.style.color = "red"; // Red for error
    return false;
  }

  passError.innerHTML = "";
  passIcon.classList.add("fa-solid", "fa-check");
  passIcon.style.color = "green"; // Green for success
  return true;
}


// **Toggle Password Visibility**
passIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text"; // Show password
    passIcon.classList.remove("fa-eye-slash");
    passIcon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password"; // Hide password
    passIcon.classList.remove("fa-eye");
    passIcon.classList.add("fa-eye-slash");
  }
});
