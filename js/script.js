
window.addEventListener("scroll", () => {

const header = document.querySelector(".header");

if(window.scrollY > 100){
    header.classList.add("scrolled");
}else{
    header.classList.remove("scrolled");
}

});
const counters = document.querySelectorAll(".counter");

const runCounter = () => {
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;

        const update = () => {
            count += Math.ceil(target / 80);

            if (count < target) {
                counter.innerText = count + "+";
                requestAnimationFrame(update);
            } else {
                counter.innerText = target + "+";
            }
        };

        update();
    });
};

const statsSection = document.querySelector(".statistics");

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        runCounter();
        observer.disconnect();
    }
});

observer.observe(statsSection);
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const button = item.querySelector(".faq-question");

button.addEventListener("click", () => {

item.classList.toggle("active");

});

});

// ================= Hamburger Menu =================
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const menuIcon = document.querySelector("#menu-toggle i");

if (menuToggle && navbar && menuIcon) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
        document.body.classList.toggle("menu-open");
        
        if (navbar.classList.contains("active")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");
        } else {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }
    });

    // Close menu when a link inside navbar is clicked
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            document.body.classList.remove("menu-open");
            if (menuIcon.classList.contains("fa-xmark")) {
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            }
        });
    });

    // Close menu when clicking outside of navbar
    document.addEventListener("click", (e) => {
        if (navbar.classList.contains("active") && !navbar.contains(e.target) && !menuToggle.contains(e.target)) {
            navbar.classList.remove("active");
            document.body.classList.remove("menu-open");
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }
    });
}

// ================= Redirect all action buttons/submits to 404 =================
document.addEventListener("click", (e) => {
    const button = e.target.closest("button, input[type='submit']");
    if (button) {
        e.preventDefault();
        window.location.href = "404.html";
    }
});