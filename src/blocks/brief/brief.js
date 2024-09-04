const brief = document.getElementById("brief");

if (brief) {

  const openBriefBtns = document.querySelectorAll(".js-brief-open");

  openBriefBtns.forEach(openBriefBtn => {
    openBriefBtn.addEventListener("click", () => {
      brief.classList.add("js-visible");
      blockScrollBody();
    });
  });


}