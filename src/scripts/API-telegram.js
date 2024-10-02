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

  let message = `<b>Имя:</b> ${target.name.value}\n`;
  message += `<b>Телефон:</b> ${target.phone.value}\n`;
  message += `<b>Способ связи:</b> ${target.connection.value}\n`;

  // Добавление данных в заявку со страницы щита
  const formPopup = target.closest("#formPopup");
  if (formPopup) {
    const popupProductName = formPopup.querySelector(".form-popup__product-name").textContent.replace("Электрощит", "");
    const popupProductPrice = formPopup.querySelector(".form-popup__product-price").textContent;
    const popupProductCompany = formPopup.querySelector(".form-popup__mod-item--company span").textContent;
    const popupProductCase = formPopup.querySelector(".form-popup__mod-item--case span").textContent;
    const popupProductLoop = formPopup.querySelector(".form-popup__mod-item--loop span").textContent;

    message += `<b>Щит:</b> ${popupProductName}\n`;
    message += `<b>Цена:</b> ${popupProductPrice}\n`;
    message += `<b>Производитель:</b> ${popupProductCompany}\n`;
    message += `<b>Корпус:</b> ${popupProductCase}\n`;
    message += `<b>Петля:</b> ${popupProductLoop}\n`;
  };


  const brief = target.closest("#brief");
  if (brief) {
    const inputList = brief.querySelectorAll("input:checked");
    message += `<b>Щит на заказ:</b>\n`;
    inputList.forEach(input => {
      message += `<b>${input.name}:</b> ${input.value}\n`;
    });
  };



  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  })
    .then( () => {
      console.log("Заявка отправлена");
      showFormMessage("success");
    })
    .catch(err => {
      console.warn(err);
      showFormMessage("error");
    })
    .finally(() => {
      console.log("Конец");
    });
  target.reset();
  // Закрыть попап после отправки формы
  formPopup && formPopup.close();
  // После заполнения брифа переход на главную стр
  if (brief) setTimeout(() => window.location.href = "/", 5000);
};