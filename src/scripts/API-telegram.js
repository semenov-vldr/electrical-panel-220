// Отправка данных формы в Телеграм
const TOKEN = "7222927734:AAHS5zF9cSpVSdlB-bJY15hQGySIgO3nu3U";
const CHAT_ID = "-1002270002046";
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

const forms = document.querySelectorAll("form.form");
if (forms) {
  forms.forEach(form => form.addEventListener("submit", sendMessageTelegram));
}

function sendMessageTelegram (evt) {
  evt.preventDefault();

  const target = this; // form
  const typeConnection = target.querySelector(".form__connection input[type='radio']:checked");
  const formPopup = target.closest("#formPopup");

  let message = `<b>Имя:</b> ${this.name.value}\n`;
  message += `<b>Телефон:</b> ${this.phone.value}\n`;



  if (formPopup) {
    const popupProductName = formPopup.querySelector(".form-popup__product-name");
    const popupProductPrice = formPopup.querySelector(".form-popup__product-price");
    const popupProductCompany = formPopup.querySelector(".form-popup__product-company");
    const popupProductCase = formPopup.querySelector(".form-popup__mod-item--case input:checked");
    const popupProductLoop = formPopup.querySelector(".form-popup__mod-item--loop input:checked");

    message += `<b>Щит:</b> ${popupProductName.textContent}\n`;
    message += `<b>Цена:</b> ${popupProductPrice.textContent}\n`;
    message += `<b>Производитель:</b> ${popupProductCompany.textContent}\n`;
    message += `<b>Корпус:</b> ${popupProductCase.value}\n`;
    message += `<b>Петля:</b> ${popupProductLoop.value}\n`;
  }

  message += `<b>Способ связи:</b> ${typeConnection.value}\n`;



  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  })
    .then( () => {
      console.log("Заявка отправлена");
      formSuccess();
    })
    .catch(err => {
      console.warn(err);
      formError();
    })
    .finally(() => {
      console.log("Конец");
    });
  target.reset();
  formPopup && formPopup.close(); // Закрыть попап после отправки формы

};