// ================= Notification =================

const bell = document.querySelector(".profile i");

if (bell) {

    bell.addEventListener("click", () => {

        alert("No new notifications.");

    });

}

// ================= Logout =================

const logout = document.querySelector('a[href="login.html"]');

if (logout) {

    logout.addEventListener("click", function (e) {

        const confirmLogout = confirm("Are you sure you want to logout?");

        if (!confirmLogout) {

            e.preventDefault();

        }

    });

}

// ================= Active Sidebar =================

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    item.addEventListener("click", function () {

        menuItems.forEach(i => i.classList.remove("active"));

        this.classList.add("active");

    });

});

// ================= Counter Animation =================

const counters = document.querySelectorAll(".card h3");

if (counters.length > 0) {

    counters.forEach(counter => {

        const original = counter.textContent.trim();

        const number = parseInt(original.replace(/\D/g, ""));

        if (isNaN(number)) return;

        const suffix = original.replace(/[0-9]/g, "");

        let current = 0;

        const step = Math.max(1, Math.ceil(number / 80));

        const timer = setInterval(() => {

            current += step;

            if (current >= number) {

                current = number;

                clearInterval(timer);

            }

            counter.textContent = current + suffix;

        }, 20);

    });

}

// ================= Welcome =================

window.addEventListener("load", () => {

    console.log("Welcome to Stackly User Dashboard");

});

// ================= Card Hover =================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ================= Table Row Hover =================

const rows = document.querySelectorAll("tbody tr");

rows.forEach(row => {

    row.addEventListener("mouseenter", () => {

        row.style.background = "#1b3d59";

    });

    row.addEventListener("mouseleave", () => {

        row.style.background = "transparent";

    });

});