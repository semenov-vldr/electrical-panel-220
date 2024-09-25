function showFormMessage(type) { // success || error
  const formMessage = document.querySelector('#formMessage');
  if (!formMessage) return;
  const messageEl = formMessage.querySelector(`.form-message__item--${type}`);
  formMessage.showModal();
  messageEl.hidden = false;

  formMessage.addEventListener("close", () => {
    messageEl.hidden = true;
  });
}









