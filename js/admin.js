// ================= Active Sidebar =================

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    item.addEventListener("click", function () {

        menuItems.forEach(i => i.classList.remove("active"));

        this.classList.add("active");

    });

});

// ================= Animated Counters =================

const counters = document.querySelectorAll(".card h3");

if (counters.length > 0) {

    counters.forEach(counter => {

        const target = counter.innerText.replace(/\D/g, "");

        let count = 0;

        const speed = Math.ceil(target / 80);

        function updateCounter() {

            if (count < target) {

                count += speed;

                if (count > target) count = target;

                counter.innerText = count;

            } else {

                clearInterval(interval);

            }

        }

        const interval = setInterval(updateCounter, 20);

    });

}

// ================= Notification =================

const bell = document.querySelector(".profile i");

bell.addEventListener("click", () => {

    alert("No new notifications.");

});

// ================= Logout =================

const logout = document.querySelector('a[href="login.html"]');

logout.addEventListener("click", function (e) {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (!confirmLogout) {

        e.preventDefault();

    }

});

// ================= Welcome =================

window.addEventListener("load", () => {

    console.log("Welcome to Stackly Admin Dashboard");

});

// ================= Redirect all action buttons/submits to 404 =================
document.addEventListener("click", (e) => {
    const button = e.target.closest("button, input[type='submit']");
    if (button) {
        e.preventDefault();
        window.location.href = "404.html";
    }
});
