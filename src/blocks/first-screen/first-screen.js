const firstScreen = document.querySelector("#first-screen");

if (firstScreen) {

  // отмечаем, что первый экран уже был
  firstScreen.addEventListener("click", () => {
    window.localStorage.setItem("firstScreen", "on");
  });


  const firstScreenLS = window.localStorage.getItem('firstScreen');

  window.addEventListener("load", () => {
    firstScreen.classList.add("js-active");
     if (firstScreenLS === "on") {
      unblockScrollBody();
      firstScreen.remove();
    }
  });

  const assembly = firstScreen.querySelector(".first-screen__assembly");
  assembly.addEventListener("click", hiddenFirstScreen);

  function hiddenFirstScreen () {
    firstScreen.classList.remove("js-active");
    unblockScrollBody();
    setTimeout(() => {
      firstScreen.remove();
    }, 1000);
  };

}