"use strict";

// Отправка данных формы в Телеграм
var TOKEN = "7222927734:AAHS5zF9cSpVSdlB-bJY15hQGySIgO3nu3U";
var CHAT_ID = "-1002270002046";
var URL_API = "https://api.telegram.org/bot".concat(TOKEN, "/sendMessage");
var forms = document.querySelectorAll("form.form");
if (forms) {
  forms.forEach(function (form) {
    return form.addEventListener("submit", sendMessageTelegram);
  });
}
function sendMessageTelegram(evt) {
  evt.preventDefault();
  var target = this; // form

  var message = "<b>\u0418\u043C\u044F:</b> ".concat(target.name.value, "\n");
  message += "<b>\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</b> ".concat(target.phone.value, "\n");
  message += "<b>\u0421\u043F\u043E\u0441\u043E\u0431 \u0441\u0432\u044F\u0437\u0438:</b> ".concat(target.connection.value, "\n");

  // Добавление данных в заявку со страницы щита
  var formPopup = target.closest("#formPopup");
  if (formPopup) {
    var popupProductName = formPopup.querySelector(".form-popup__product-name");
    var popupProductPrice = formPopup.querySelector(".form-popup__product-price");
    var popupProductCompany = formPopup.querySelector(".form-popup__product-company");
    var popupProductCase = formPopup.querySelector(".form-popup__mod-item--case input:checked");
    var popupProductLoop = formPopup.querySelector(".form-popup__mod-item--loop input:checked");
    message += "<b>\u0429\u0438\u0442:</b> ".concat(popupProductName.textContent, "\n");
    message += "<b>\u0426\u0435\u043D\u0430:</b> ".concat(popupProductPrice.textContent, "\n");
    message += "<b>\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C:</b> ".concat(popupProductCompany.textContent, "\n");
    message += "<b>\u041A\u043E\u0440\u043F\u0443\u0441:</b> ".concat(popupProductCase.value, "\n");
    message += "<b>\u041F\u0435\u0442\u043B\u044F:</b> ".concat(popupProductLoop.value, "\n");
  }
  ;
  var brief = target.closest("#brief");
  if (brief) {
    var inputList = brief.querySelectorAll("input:checked");
    message += "<b>\u0429\u0438\u0442 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437:</b>\n";
    inputList.forEach(function (input) {
      message += "<b>".concat(input.name, ":</b> ").concat(input.value, "\n");
    });
  }
  ;
  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message
  }).then(function () {
    console.log("Заявка отправлена");
    showFormMessage("success");
  })["catch"](function (err) {
    console.warn(err);
    showFormMessage("error");
  })["finally"](function () {
    console.log("Конец");
  });
  target.reset();
  // Закрыть попап после отправки формы
  formPopup && formPopup.close();
  // После заполнения брифа переход на главную стр
  if (brief) setTimeout(function () {
    return window.location.href = "/";
  }, 5000);
}
;
"use strict";

var html = document.querySelector('html');
var classBlockScroll = "js-no-scroll";
function blockScrollBody() {
  if (!html.classList.contains(classBlockScroll)) {
    html.classList.add(classBlockScroll);
  }
}
;
function unblockScrollBody() {
  if (html.classList.contains(classBlockScroll)) {
    html.classList.remove(classBlockScroll);
  }
}
;
function toggleBlockScrollBody() {
  if (html.classList.contains(classBlockScroll)) {
    html.classList.remove(classBlockScroll);
  } else {
    html.classList.add(classBlockScroll);
  }
}
;
"use strict";

// Закрытие dialog по клику на backdrop
function closeOnBackDropClick(_ref) {
  var currentTarget = _ref.currentTarget,
    target = _ref.target;
  var dialogElement = currentTarget;
  var isClickedOnBackDrop = target === dialogElement;
  if (isClickedOnBackDrop) dialogElement.close();
}
var dialogElements = document.querySelectorAll("dialog");
if (dialogElements) {
  dialogElements.forEach(function (dialogElement) {
    return dialogElement.onclick = closeOnBackDropClick;
  });
}
"use strict";
"use strict";

var images = document.querySelectorAll("img");
if (images) {
  images.forEach(function (img) {
    return img.setAttribute("loading", "lazy");
  });
}
// const player = videojs('.video-js', {
//   autoplay: false,
//   fluid: true
// });
"use strict";
"use strict";

var brief = document.getElementById("brief");
if (brief) {
  var openBriefBtns = document.querySelectorAll(".js-brief-open");
  openBriefBtns.forEach(function (openBriefBtn) {
    openBriefBtn.addEventListener("click", function () {
      brief.classList.add("js-visible");
      blockScrollBody();
    });
  });
}
"use strict";

var catalogSwiper = new Swiper(".catalog__container", {
  breakpoints: {
    320: {
      spaceBetween: 16,
      slidesPerView: 1.2
    },
    480: {
      spaceBetween: 16,
      slidesPerView: 1.8
    },
    768: {
      spaceBetween: 32,
      slidesPerView: 2.2
    },
    960: {
      spaceBetween: 32,
      slidesPerView: 3
    }
  }
});
"use strict";

var firstScreen = document.querySelector("#first-screen");
if (firstScreen) {
  var hiddenFirstScreen = function hiddenFirstScreen() {
    firstScreen.classList.remove("js-active");
    unblockScrollBody();
    setTimeout(function () {
      firstScreen.remove();
    }, 1000);
  };
  // отмечаем, что первый экран уже был
  firstScreen.addEventListener("click", function () {
    window.localStorage.setItem("firstScreen", "on");
  });
  var firstScreenLS = window.localStorage.getItem('firstScreen');
  window.addEventListener("load", function () {
    firstScreen.classList.add("js-active");
    if (firstScreenLS === "on") {
      unblockScrollBody();
      firstScreen.remove();
    }
  });
  var assembly = firstScreen.querySelector(".first-screen__assembly");
  assembly.addEventListener("click", hiddenFirstScreen);
  ;

  // Очистка из localStorage данных о первом экране
  var footerDetails = document.querySelector(".footer__details");
  if (footerDetails) {
    footerDetails.addEventListener("click", function () {
      window.localStorage.removeItem('firstScreen');
    });
  }
}
"use strict";

var mobileWidthMediaQuery = window.matchMedia('(max-width: 767px)');
var footerContainer = document.querySelector(".footer__container");
function changeFooterLineDecor() {
  if (mobileWidthMediaQuery.matches) {
    footerContainer.classList.add("v-line");
    footerContainer.classList.remove("v-line-inner");
  } else {
    footerContainer.classList.remove("v-line");
    footerContainer.classList.add("v-line-inner");
  }
}
if (footerContainer) {
  changeFooterLineDecor();
  document.addEventListener("resize", changeFooterLineDecor);
}
"use strict";

var maskTel = new Inputmask("+7 (999) 999-99-99");
maskTel.mask("[type='tel']");
"use strict";

function showFormMessage(type) {
  // success || error
  var formMessage = document.querySelector('#formMessage');
  if (!formMessage) return;
  var messageEl = formMessage.querySelector(".form-message__item--".concat(type));
  formMessage.showModal();
  messageEl.hidden = false;
  formMessage.addEventListener("close", function () {
    messageEl.hidden = true;
  });
}
"use strict";

function mobileNav() {
  var header = document.querySelector("header.header");
  if (!header) return;
  var nav = header.querySelector(".header__nav");
  var burger = header.querySelector(".header__burger");
  var navLinks = nav.querySelectorAll(".header-nav__link");
  function closeMenu() {
    nav.classList.remove("js-mobile-nav-open");
    unblockScrollBody();
  }
  ;

  // Открытие мобильного меню Бургер
  burger.addEventListener("click", function () {
    nav.classList.toggle("js-mobile-nav-open");
    toggleBlockScrollBody();

    // Скрытие меню по клику вне блока
    if (nav.classList.contains("js-mobile-nav-open")) {
      document.addEventListener("click", function (evt) {
        if (!evt.target.closest(".header")) closeMenu();
      });
    }
  });
  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", closeMenu);
  });
}
mobileNav();
"use strict";

function hideLoader() {
  var loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hide');
    setTimeout(function () {
      loader.remove();
    }, 500);
  }
}
;
window.addEventListener('load', hideLoader);
"use strict";

function popupOpen() {
  var formPopup = document.querySelector(".form-popup");
  if (!formPopup) return;
  var popupProductName = formPopup.querySelector(".form-popup__product-name");
  var popupProductPrice = formPopup.querySelector(".form-popup__product-price");
  var popupProductCompany = formPopup.querySelector(".form-popup__product-company");
  var popupProductCase = formPopup.querySelector(".form-popup__mod-item--case");
  var popupProductLoop = formPopup.querySelector(".form-popup__mod-item--loop");
  var productPage = document.querySelector(".product-page");
  var productTitle = productPage.querySelector(".product-page__title");
  var productPrice = productPage.querySelector(".product-page__price");
  var productCompany = productPage.querySelector(".product-page__companies input[type='radio']:checked");
  var productCase = productPage.querySelector(".product-page__case input[type='radio']:checked");
  var productLoop = productPage.querySelector(".product-page__loop input[type='radio']:checked");
  popupProductName.textContent = productTitle.textContent;
  popupProductPrice.textContent = productPrice.textContent;
  popupProductCompany.textContent = productCompany.value;
  popupProductCase.querySelector("input[value=".concat(productCase.value, "]")).checked = true;
  popupProductLoop.querySelector("input[value=".concat(productLoop.value, "]")).checked = true;
}
;
var popupOpenBtn = document.querySelector(".product-page__buy-button");
popupOpenBtn && popupOpenBtn.addEventListener("click", popupOpen);
"use strict";

var productPage = document.querySelector(".product-page");
function createProductSlider(parent) {
  // Слайдер с миниатюрами
  var swiperTop = parent.querySelector('.swiper-top');
  var swiperThumbs = parent.querySelector('.swiper-thumbs');
  var swiper__thumbs = new Swiper(swiperThumbs, {
    spaceBetween: 16,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    initialSlide: 0
  });
  var swiper__top = new Swiper(swiperTop, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 0,
    thumbs: {
      swiper: swiper__thumbs
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });
}
if (productPage) {
  var formatPrice = function formatPrice(dataPrice) {
    productPrice.textContent = "".concat(dataPrice.toLocaleString('ru-RU'), " \u20BD");
  };
  var productSliders = productPage.querySelectorAll('.product-page__slider');
  productSliders.forEach(createProductSlider);
  var productPrice = productPage.querySelector('.product-page__price');
  var inputRadioCompanies = productPage.querySelectorAll('.product-page__companies input[type="radio"]');
  ;
  inputRadioCompanies.forEach(function (company) {
    company.addEventListener("change", function () {
      if (company.checked) {
        // Установка цены по производителю
        formatPrice(+company.dataset.price);

        // Установка слайдера в соответствии с производителем
        productSliders.forEach(function (slider) {
          slider.hidden = slider.dataset.company !== company.value;
        });
      }
    });
  });
  var productCase = document.querySelector(".product-page__case");
  productCase.addEventListener("change", function () {
    var checked = productCase.querySelector("input:checked");
  });

  // Создание галереи слайдера
  Fancybox.bind('[data-fancybox]', {});
  var swiperTop = productPage.querySelector(".product-page__slider .swiper-top");
  var swiperTopImages = Array.from(swiperTop.querySelectorAll("img"));
  var imgSet = new Set(swiperTopImages.map(function (topImg) {
    return {
      src: topImg.src
    };
  }));
  swiperTop.addEventListener("click", function () {
    return Fancybox.show(imgSet);
  });
}
"use strict";

var filter = document.querySelector(".filter");
if (filter) {
  var filterCards = function filterCards() {
    var catalogGrid = document.querySelector(".main-catalog__grid");
    var cards = catalogGrid.querySelectorAll(".card");
    var phasesChecked = this.querySelectorAll('.filter__item--phases input[type="checkbox"]:checked');
    var modulesChecked = this.querySelectorAll('.filter__item--modules input[type="checkbox"]:checked');
    cards.forEach(function (card) {
      var MatchesPhases = phasesChecked.length === 0 || Array.from(phasesChecked, function (checkbox) {
        return checkbox.value;
      }).includes(card.dataset.phases);
      var MatchesModules = modulesChecked.length === 0 || Array.from(modulesChecked, function (checkbox) {
        return checkbox.value;
      }).includes(card.dataset.modules);
      card.classList.toggle("js-hidden", !(MatchesPhases && MatchesModules));
    });
  };
  // Функция сортировки и обновления порядка карточек
  var sortingCards = function sortingCards() {
    mainCatalog.replaceChildren();
    var selectedSort = filterSort.querySelector("input:checked").value;
    var sortingValue = {
      cheap: sortingCheaperProductCards,
      expensive: sortingExpensiveProductCards,
      popular: cards
    }[selectedSort];
    sortingValue.forEach(function (card) {
      return mainCatalog.appendChild(card);
    });
  };
  var filterItems = filter.querySelectorAll(".filter__item, .filter__item-sort");

  // Скрытие каждого меню по клику вне его
  filterItems.forEach(function (filterItem) {
    document.addEventListener("click", function (evt) {
      if (!filterItem.contains(evt.target)) {
        filterItem.open = false;
      }
    });
  });

  // Фильтрация карточек
  filter.addEventListener("change", filterCards);
  filter.dispatchEvent(new Event('change'));
  ;

  // ---- Сортировка карточек ----
  var filterSort = filter.querySelector(".filter__item-sort");
  var mainCatalog = document.querySelector(".main-catalog__grid");
  var cards = mainCatalog.querySelectorAll(".card");

  // Сначала дешевле
  var sortingCheaperProductCards = Array.from(cards).sort(function (a, b) {
    return +a.dataset.price - +b.dataset.price;
  });

  // Сначала дороже
  var sortingExpensiveProductCards = Array.from(cards).sort(function (a, b) {
    return +b.dataset.price - +a.dataset.price;
  });
  ;
  filterSort.addEventListener("change", sortingCards);
}