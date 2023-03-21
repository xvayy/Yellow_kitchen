//Swiper specialities

const swiper2 = new Swiper('.specialities__slider', {

  slidesPerView: 8,
  spaceBetween: 24,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  //   // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3.5,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4.3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5.5,
      spaceBetween: 20,
    },
    1256: {
      slidesPerView: 7.5,
      spaceBetween: 20,
    },
  }
});