let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
let interval;
let delayAfterClick = 5000; 


slides[slideIndex].classList.add('active');

function showSlides() {
    slides.forEach(slide => slide.classList.remove('active')); 
    slideIndex = (slideIndex + 1) % slides.length; 
    slides[slideIndex].classList.add('active'); 
}

function startSlideshow() {
    interval = setInterval(showSlides, 10000); 
}

function stopSlideshow() {
    clearInterval(interval); 
}

function delayedStartSlideshow() {
    setTimeout(startSlideshow, delayAfterClick); 
}

function nextSlide() {
    stopSlideshow(); 
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
    delayedStartSlideshow(); 

function prevSlide() {
    stopSlideshow(); 
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
    delayedStartSlideshow(); 
}

document.addEventListener('DOMContentLoaded', function() {
    startSlideshow(); 
});



window.addEventListener('scroll', function() {
    const parallaxImage = document.querySelector('.parallax-image');
    const scrollY = window.scrollY;
    parallaxImage.style.top = `-${scrollY * 0.4}px`; 
