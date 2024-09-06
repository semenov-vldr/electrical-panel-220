const catalogSwiper = new Swiper(".catalog__container", {

  breakpoints: {
    320: {
      spaceBetween: 16,
      slidesPerView: 1.2,
    },

    480: {
      spaceBetween: 16,
      slidesPerView: 1.8,
    },

    768: {
      spaceBetween: 32,
      slidesPerView: 2.2,
    },

    960: {
      spaceBetween: 32,
      slidesPerView: 3,
    }
  }
});