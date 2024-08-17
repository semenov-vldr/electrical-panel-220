"use strict";

// Отправка данных формы в Телеграм
var TOKEN = "6388509099:AAFIQyVlZ4MapEiXhH2vQJh8CyZFgFoJ_mA";
var CHAT_ID = "-1002008090284";
var URL_API = "https://api.telegram.org/bot".concat(TOKEN, "/sendMessage");
var forms = document.querySelectorAll("form.form");
if (forms) {
  forms.forEach(function (form) {
    return form.addEventListener("submit", sendMessageTelegram);
  });
}
function sendMessageTelegram(evt) {
  evt.preventDefault();
  var typeConnection = this.querySelector(".form__connection-fieldset input[type='radio']:checked");
  var successFormMessage = this.querySelector('.form__message--success');
  var errorFormMessage = this.querySelector('.form__message--error');
  function formSuccess() {
    successFormMessage.classList.add('js-message-active');
  }
  function formError() {
    errorFormMessage.classList.add('js-message-active');
  }
  var message = "<b>\u0417\u0430\u044F\u0432\u043A\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430 ***:</b>\n";
  message += "<b>\u0418\u043C\u044F:</b> ".concat(this.name.value, "\n");
  message += "<b>\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</b> ".concat(this.phone.value, "\n");
  message += "<b>\u0421\u043F\u043E\u0441\u043E\u0431 \u0441\u0432\u044F\u0437\u0438:</b> ".concat(typeConnection.value, "\n");
  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message
  }).then(function () {
    console.log("Заявка отправлена");
    //formSuccess();
  })["catch"](function (err) {
    console.warn(err);
    //formError();
  })["finally"](function () {
    console.log("Конец");
  });
  this.reset();
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
    dialogElement.addEventListener("click", closeOnBackDropClick);
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