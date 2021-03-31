const adFormElement = document.querySelector(`.ad-form`);

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

const selectTypeElement = adFormElement.querySelector(`#type`);
const selectPriceElement = adFormElement.querySelector(`#price`);

const typeToMinPrice = {
    "bungalow" : 0,
    "flat"     : 1000,
    "house"    : 5000,
    "palace"   : 10000,
}

const onSelectTypeChange = () => {
    selectPriceElement.setAttribute(`placeholder`, typeToMinPrice[selectTypeElement.value]);
    selectPriceElement.setAttribute(`min`, typeToMinPrice[selectTypeElement.value]);
}

const setupSelectType = () => {
    selectTypeElement.addEventListener(`change`, onSelectTypeChange);
}

// ***

export const setupAdFormUsability = () => {
    setupSelectTimeinTimeout();
    setupSelectType();
}

