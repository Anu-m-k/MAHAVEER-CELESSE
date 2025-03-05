// Toggle Hamburger Menu
function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    let burger = document.querySelector(".hamburger");
    
    menu.classList.toggle("active");
    burger.classList.toggle("active");
}

// Change navbar background on scroll
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "#850000";
    } else {
        navbar.style.background = "#a10000";
    }
});


//project section
document.addEventListener("DOMContentLoaded", function () {
    const slide = document.querySelector(".carousel-slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let counter = 0;
    const size = document.querySelector(".project-card").clientWidth + 20; // Including margin

    // Next Slide
    nextBtn.addEventListener("click", () => {
        if (counter >= 2) { // Number of slides - 1
            counter = 0;
        } else {
            counter++;
        }
        slide.style.transform = `translateX(${-size * counter}px)`;
    });

    // Previous Slide
    prevBtn.addEventListener("click", () => {
        if (counter <= 0) {
            counter = 2;
        } else {
            counter--;
        }
        slide.style.transform = `translateX(${-size * counter}px)`;
    });

    // Auto-Slide every 3 seconds
    setInterval(() => {
        if (counter >= 2) {
            counter = 0;
        } else {
            counter++;
        }
        slide.style.transform = `translateX(${-size * counter}px)`;
    }, 3000);
});

//testimonals
$(document).ready(function(){
    $('.testimonials-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".view-more").click(function() {
        alert("More testimonials coming soon!");
    });
});
