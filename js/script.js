window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});
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