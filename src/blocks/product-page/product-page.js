// Слайдер с миниатюрами


  const swiperTop = document.querySelector('.swiper-top');
  const swiperThumbs = document.querySelector('.swiper-thumbs');

  let swiper__thumbs = new Swiper(swiperThumbs, {
    spaceBetween: 28,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    initialSlide: 0,
  });

  let swiper__top = new Swiper(swiperTop, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 0,
    thumbs: {
      swiper: swiper__thumbs,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });
