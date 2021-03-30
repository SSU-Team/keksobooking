const mapFiltersElement = document.querySelector(`.map__filters`);
const adFormElement = document.querySelector(`.ad-form`);

// ***

const selectTypeElement = adFormElement.querySelector(`#type`);
const selectPriceElement = adFormElement.querySelector(`#price`);

const typeToMinPrice = {
  "bungalow" : 0,
  "flat"     : 1000,
  "house"    : 5000,
  "palace"   : 10000,
}

const onSelectPriceChange = () => {
  selectPriceElement.setAttribute(`min`, typeToMinPrice[selectTypeElement.value]);
  selectPriceElement.setAttribute(`placeholder`, typeToMinPrice[selectTypeElement.value]);
}

const setupSelectPrice = () => {
  selectTypeElement.addEventListener(`change`, onSelectPriceChange);
}

// ***

const selectTimeinElement = adFormElement.querySelector(`#timein`);
const selectTimeoutElement = adFormElement.querySelector(`#timeout`);

const onSelectTimeinChange = () => {
  selectTimeoutElement.value = selectTimeinElement.value;
}

const setupSelectTimein = () => {
  selectTimeinElement.addEventListener(`change`, onSelectTimeinChange);
}

const onSelectTimeoutChange = () => {
  selectTimeinElement.value = selectTimeoutElement.value;
}

const setupSelectTimeout = () => {
  selectTimeoutElement.addEventListener(`change`, onSelectTimeoutChange);
} 

const setupSelectTimeinTimeout = () => {
  setupSelectTimein();
  setupSelectTimeout();
}

// ***

export const setupForm = () => {
  mapFiltersElement.classList.add(`map__filters--disabled`);
  Array.from(mapFiltersElement.children).map(selectElement => selectElement.disabled = true);

  adFormElement.classList.add(`ad-form--disabled`);
  Array.from(adFormElement.children).map(fieldsetElement => fieldsetElement.disabled = true);

  setupSelectPrice();
  setupSelectTimeinTimeout();
} 

