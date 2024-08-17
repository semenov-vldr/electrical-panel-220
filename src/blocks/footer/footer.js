const mobileWidthMediaQuery = window.matchMedia('(max-width: 767px)')
const footerContainer = document.querySelector(".footer__container");

function changeFooterLineDecor () {
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
