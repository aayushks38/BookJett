const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;
const totalSlides = slide.length;

function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
    index++;

    if (index >= totalSlides) {
        index = 0;
    }

    updateSlider();
});

prev.addEventListener("click", () => {
    index--;

    if (index < 0) {
        index = totalSlides - 1;
    }

    updateSlider();
});

setInterval(() => {
    index++;

    if (index >= totalSlides) {
        index = 0;
    }

    updateSlider();
}, 4000);