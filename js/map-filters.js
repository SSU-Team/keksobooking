const mapFiltersElement = document.querySelector(`.map__filters`);

export const setupMapFiltersFormElement = (cb) => {
  mapFiltersElement.addEventListener(`change`, () => {
    console.log(`123123123`)
    cb();
  }, true)
}