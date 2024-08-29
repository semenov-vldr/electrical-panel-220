const filter = document.querySelector(".filter");

if (filter) {


  const filterItems = filter.querySelectorAll(".filter__item, .filter__item-sort");

  // Скрытие каждого меню по клику вне его
  filterItems.forEach(filterItem => {
    document.addEventListener("click", (evt) => {
      if (!filterItem.contains(evt.target)) {
        filterItem.open = false;
      }
    });
  });



  // Фильтрация карточек
  const mainCatalog = document.querySelector(".main-catalog");
  const cards = mainCatalog.querySelectorAll(".card");

  const filterPhases = filter.querySelector(".filter__item--phases");
  const filterModules = filter.querySelector(".filter__item--modules");


  filterPhases.addEventListener("change", filterCards);
  filterModules.addEventListener("change", filterCards);

  function filterCards() {

    const selectedPhases = Array.from(filterPhases.querySelectorAll("input[type='checkbox']:checked"))
                            .map(checkbox => checkbox.value);
    const selectedModules = Array.from(filterModules.querySelectorAll("input[type='checkbox']:checked"))
                            .map(checkbox => checkbox.value);


    cards.forEach(card => {
      const phases = card.dataset.phases;
      const modules = card.dataset.modules;

      if (selectedPhases.includes(phases) || selectedModules.includes(modules)) {
        card.classList.remove("js-hidden");
      } else {
        card.classList.add("js-hidden");
      }

      if (!selectedPhases.length && !selectedModules.length) {
        card.classList.remove("js-hidden");
      }
    });






  };





}