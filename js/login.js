// ================= Show / Hide Password =================

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        password.type = "password";
        togglePassword.classList.replace("fa-eye-slash", "fa-eye");

    }

});

// ================= Login =================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const role = document.getElementById("role").value;

    if(role === ""){

        alert("Please select a role.");
        return;

    }

    if(role === "admin"){

        window.location.href = "admin-dashboard.html";

    }

    else if(role === "user"){

        window.location.href = "user-dashboard.html";

    }

});