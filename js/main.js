//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1, 
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: swiper,
    },
});

//Navigation bar effects on scroll

//Responsive navigation menu toggle