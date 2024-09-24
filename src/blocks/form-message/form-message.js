function formSuccess () {
  const formMessage = document.querySelector('#formMessage');
  if (!formMessage) return;
  const successFormMessage = formMessage.querySelector('.form-message__item--success');
  formMessage.showModal();
  successFormMessage.hidden = false;

  formMessage.addEventListener("close", () => {
    successFormMessage.hidden = true;
  });

};


function formError () {
  const formMessage = document.querySelector('#formMessage');
  if (!formMessage) return;
  const errorFormMessage = formMessage.querySelector('.form-message__item--error');
  formMessage.showModal();
  errorFormMessage.hidden = false;

  formMessage.addEventListener("close", () => {
    errorFormMessage.hidden = true;
  });
};









