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


  // ---- Сортировка карточек ----
  const filterSort = filter.querySelector(".filter__item-sort");
  const mainCatalog = document.querySelector(".main-catalog__grid");
  const cards = mainCatalog.querySelectorAll(".card");

  // Сначала дешевле
  const sortingCheaperProductCards = Array.from(cards).sort((a, b) => {
    return +a.dataset.price - +b.dataset.price;
  });

  // Сначала дороже
  const sortingExpensiveProductCards = Array.from(cards).sort((a, b) => {
    return +b.dataset.price - +a.dataset.price;
  });

  // Функция сортировки и обновления порядка карточек
  function sortingCards () {
    mainCatalog.replaceChildren();
    const selectedSort = filterSort.querySelector("input:checked").value;


    const sortingValue = {
      cheap : sortingCheaperProductCards,
      expensive: sortingExpensiveProductCards,
    }[selectedSort];

    sortingValue.forEach(card => mainCatalog.appendChild(card));
  };

  sortingCards();
  filterSort.addEventListener("change", sortingCards);
}