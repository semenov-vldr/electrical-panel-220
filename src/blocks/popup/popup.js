function popupOpen() {
  const formPopup = document.querySelector(".form-popup");
  if (!formPopup) return;

  const popupProductName = formPopup.querySelector(".form-popup__product-name");
  const popupProductPrice = formPopup.querySelector(".form-popup__product-price");
  const popupProductCompany = formPopup.querySelector(".form-popup__product-company");
  const popupProductCase = formPopup.querySelector(".form-popup__mod-item--case");
  const popupProductLoop = formPopup.querySelector(".form-popup__mod-item--loop");

  const productPage = document.querySelector(".product-page");
  const productTitle = productPage.querySelector(".product-page__title");
  const productPrice = productPage.querySelector(".product-page__price");
  const productCompany = productPage.querySelector(".product-page__companies input[type='radio']:checked");
  const productCase = productPage.querySelector(".product-page__case input[type='radio']:checked");
  const productLoop = productPage.querySelector(".product-page__loop input[type='radio']:checked");

  popupProductName.textContent = productTitle.textContent;
  popupProductPrice.textContent = productPrice.textContent;
  popupProductCompany.textContent = productCompany.value;

  popupProductCase.querySelector(`input[value=${productCase.value}]`).checked = true;
  popupProductLoop.querySelector(`input[value=${productLoop.value}]`).checked = true;

};

const popupOpenBtn = document.querySelector(".product-page__buy-button");
popupOpenBtn && popupOpenBtn.addEventListener("click", popupOpen);




