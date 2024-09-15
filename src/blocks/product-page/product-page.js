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
}


if (productPage) {

  const productSliders = productPage.querySelectorAll('.product-page__slider');
  productSliders.forEach(createProductSlider);

  const productPrice = productPage.querySelector('.product-page__price');
  const inputRadioCompanies = productPage.querySelectorAll('.product-page__companies input[type="radio"]');

  function formatPrice (dataPrice) {
    console.log(dataPrice)
    productPrice.textContent = `${dataPrice.toLocaleString('ru-RU')} ₽`;
  };

  inputRadioCompanies.forEach(company => {
    company.addEventListener("change", () => {

      if (company.checked) {
        // Установка цены по производителю
        formatPrice(+company.dataset.price);

        // Установка слайдера в соответствии с производителем
        productSliders.forEach(slider => {
          slider.hidden = slider.dataset.company !== company.value
        });
      }
    });
  });


}















