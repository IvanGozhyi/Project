document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger-menu");
    const menu = document.querySelector(".header__menu");

    burger.addEventListener("click", function (event) {
        menu.classList.toggle("active");
        burger.classList.toggle("active");
        event.stopPropagation();
    });


    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !burger.contains(event.target)) {
            menu.classList.remove("active");
            burger.classList.remove("active");
        }
    });


    document.querySelectorAll(".header__nav__list__item a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
            burger.classList.remove("active");
        });
    });
});


let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex += direction;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}