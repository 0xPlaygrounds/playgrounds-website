document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const logo = document.getElementById('navbar-logo');

    if (logo) {
        const originalLogoSrc = logo.getAttribute('src');
        const scrolledLogoSrc = logo.getAttribute('data-scrolled-logo');

        // Navbar scroll effect
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) { 
                navbar.classList.add('scrolled');
                logo.setAttribute('src', scrolledLogoSrc);
            } else {
                navbar.classList.remove('scrolled');
                logo.setAttribute('src', originalLogoSrc);
            }
        });
    }

    // Code slideshow functionality
    const slides = document.querySelectorAll('.slide');
    const title = document.getElementById('slideshow-title');
    const description = document.getElementById('slideshow-description');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        if (title && description && slides[index]) {
            title.textContent = slides[index].dataset.title;
            description.textContent = slides[index].dataset.description;
        }
    }

    const prevSlideButton = document.getElementById('prev-slide');
    const nextSlideButton = document.getElementById('next-slide');

    if (prevSlideButton && nextSlideButton) {
        prevSlideButton.addEventListener('click', () => {
            currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
            showSlide(currentSlide);
        });

        nextSlideButton.addEventListener('click', () => {
            currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
            showSlide(currentSlide);
        });

        // Initialize the slideshow
        showSlide(currentSlide);
    }
});
