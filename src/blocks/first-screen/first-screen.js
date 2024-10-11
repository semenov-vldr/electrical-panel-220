function handleFirstScreen() {
  const firstScreen = document.querySelector("#first-screen");
  if (!firstScreen) return;

  // Отмечаем, что первый экран уже был
  firstScreen.addEventListener("click", () => {
    window.localStorage.setItem("firstScreen", "on");
  });

  const firstScreenLS = window.localStorage.getItem('firstScreen');

  window.addEventListener("load", () => {
    firstScreen.classList.add("js-active");
    blockScrollBody();
    if (firstScreenLS === "on") {
      unblockScrollBody();
      firstScreen.classList.remove("js-active");
      //firstScreen.remove();
    }
  });

  const assembly = firstScreen.querySelector(".first-screen__assembly");
  assembly.addEventListener("click", hiddenFirstScreen);

  function hiddenFirstScreen () {
    firstScreen.classList.remove("js-active");
    unblockScrollBody();
    // setTimeout(() => {
    //   firstScreen.remove();
    // }, 1000);
  };


  const headerLogo = document.querySelector(".header__logo");
  if (headerLogo) {
    headerLogo.addEventListener("click", () => {
      firstScreen.classList.add("js-active");
      blockScrollBody();
    })
  }

  // Очистка из localStorage данных о первом экране
  const footerDetails = document.querySelector(".footer__details");
  if (footerDetails) {
    footerDetails.addEventListener("click", () => {
      window.localStorage.removeItem('firstScreen');
    });
  };

}

handleFirstScreen()

