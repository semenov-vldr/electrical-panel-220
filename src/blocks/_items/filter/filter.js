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
  filter.addEventListener("change", filterCards);
  filter.dispatchEvent(new Event('change'));

  function filterCards() {
    const catalogGrid = document.querySelector(".main-catalog__grid");
    const cards = catalogGrid.querySelectorAll(".card");

    const phasesChecked = this.querySelectorAll('.filter__item--phases input[type="checkbox"]:checked');
    const modulesChecked = this.querySelectorAll('.filter__item--modules input[type="checkbox"]:checked');

    cards.forEach(card => {
      const MatchesPhases = phasesChecked.length === 0 ||Array.from(phasesChecked,checkbox => checkbox.value)
                                                              .includes(card.dataset.phases);

      const MatchesModules = modulesChecked.length === 0 ||Array.from(modulesChecked,checkbox => checkbox.value)
                                                                .includes(card.dataset.modules);

      card.classList.toggle("js-hidden", !(MatchesPhases && MatchesModules));
    });
  };


}