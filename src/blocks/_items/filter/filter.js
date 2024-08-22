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
  const dataAttrs = [];

  cards.forEach(card => {
    const dataId = card.dataset.id;
    const dataPhases = card.dataset.phases;
    const dataModules = card.dataset.modules;

    const obj = {
      id: dataId,
      phases: dataPhases,
      modules: dataModules,
    }
    dataAttrs.push(obj);
  });


  function filterCards (filters) {

    const data = [...dataAttrs];

  }


}