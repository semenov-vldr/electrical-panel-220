const productPage = document.querySelector(".product-page");

function createProductSlider (parent) {
  // Слайдер с миниатюрами
  const swiperTop = parent.querySelector('.swiper-top');
  const swiperThumbs = parent.querySelector('.swiper-thumbs');

  let swiper__thumbs = new Swiper(swiperThumbs, {
    spaceBetween: 16,
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
}


if (productPage) {

  const productSliders = productPage.querySelectorAll('.product-page__slider');
  productSliders.forEach(createProductSlider);

  const productPrice = productPage.querySelector('.product-page__price');
  const inputRadioCompanies = productPage.querySelectorAll('.product-page__companies input[type="radio"]');

  function formatPrice (dataPrice) {
    productPrice.textContent = `${dataPrice.toLocaleString('ru-RU')} ₽`;
  };

  inputRadioCompanies.forEach(company => {
    company.addEventListener("change", () => {
      if (company.checked) {
        // Установка цены по производителю
        formatPrice(+company.dataset.price);

        // Установка слайдера в соответствии с производителем
        productSliders.forEach(slider => {
          slider.hidden = slider.dataset.company !== company.value;
        });
      }
    });
  });

  const productCase = document.querySelector(".product-page__case");
  productCase.addEventListener("change", () => {
    const checked = productCase.querySelector("input:checked");
  });



  // Создание галереи слайдера
  Fancybox.bind('[data-fancybox]', {});
  const swiperTop = productPage.querySelector(".product-page__slider .swiper-top");
  const swiperTopImages = Array.from( swiperTop.querySelectorAll("img") );
  const imgSet = new Set(swiperTopImages.map(topImg => ( {src: topImg.src} )));
  swiperTop.addEventListener("click", () => Fancybox.show(imgSet));

}















