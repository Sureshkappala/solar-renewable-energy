// ================= Show / Hide Password =================

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");

    } else {

        password.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");

    }

});

// ================= Show / Hide Confirm Password =================

const toggleConfirm = document.getElementById("toggleConfirmPassword");
const confirmPassword = document.getElementById("confirmPassword");

toggleConfirm.addEventListener("click", function () {

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");

    } else {

        confirmPassword.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");

    }

});

// ================= Register Form =================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const mobile = document.querySelector('input[type="tel"]').value.trim();

    if (name === "") {

        alert("Please enter your name.");
        return;

    }

    if (!email.includes("@")) {

        alert("Please enter a valid email.");
        return;

    }

    if (mobile.length !== 10 || isNaN(mobile)) {

        alert("Enter a valid 10-digit mobile number.");
        return;

    }

    

    if (password.value !== confirmPassword.value) {

        alert("Passwords do not match.");
        return;

    }

    alert("Registration Successful!");

    window.location.href = "login.html";

});