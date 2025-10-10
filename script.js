document.addEventListener('DOMContentLoaded', () => {

    // ======================= Hero Section Slider =======================
    const slidesContainer = document.querySelector('.hero-slider-container');
    const slides = document.querySelectorAll('.hero-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Function to update the slider position
    function updateSlider() {
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Event listeners for next and previous buttons
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    // Auto-play the slider
    setInterval(() => {
        nextBtn.click();
    }, 5000); // Change slide every 5 seconds

    // ======================= Product Carousel =======================
    const carouselTrack = document.querySelector('.carousel-track');
    const prevCarouselBtn = document.querySelector('.prev-carousel-btn');
    const nextCarouselBtn = document.querySelector('.next-carousel-btn');
    const scrollAmount = 300; // Amount to scroll on each click

    nextCarouselBtn.addEventListener('click', () => {
        carouselTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevCarouselBtn.addEventListener('click', () => {
        carouselTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });


    // ======================= Footer "Back to Top" =======================
    const backToTop = document.querySelector('.foot-panel1');

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});