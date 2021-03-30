const mapFiltersElement = document.querySelector(`.map__filters`);
const adFormElement = document.querySelector(`.ad-form`);

const inputTitleElement = adFormElement.querySelector(`#title`);
const selectTypeElement = adFormElement.querySelector(`#type`);
const selectPriceElement = adFormElement.querySelector(`#price`);

// ***

const onInputTitleInput = () => {
  console.log(inputTitleElement.validity);
  let message = ``;

  message = ``;

  if (inputTitleElement.validity.tooShort) {
    message = `` +
      `Заголовок слишком короткий: ` +
      `${inputTitleElement.value.length} символов. ` + 
      `Должен содержать от 30 до 100 символов.`;
  } else if (inputTitleElement.validity.tooLong) {
    message = `` +
      `Заголовок слишком длинный: ` +
      `${inputTitleElement.value.length} символов. ` + 
      `Должен содержать от 30 до 100 символов.`;
  } else {
    message = `` ;
  }

  inputTitleElement.setCustomValidity(message);
  inputTitleElement.reportValidity();  
}

const setupTitle = () => {
  inputTitleElement.required = true;
  inputTitleElement.setAttribute(`minlength`, 30);
  inputTitleElement.setAttribute(`maxlength`, 100);

  inputTitleElement.addEventListener(`input`, onInputTitleInput);
}

// ***

const typeToMinPrice = {
  "bungalow" : 0,
  "flat"     : 1000,
  "house"    : 5000,
  "palace"   : 10000,
}

const onSelectTypeChange = () => {
  selectPriceElement.setAttribute(`min`, typeToMinPrice[selectTypeElement.value]);
  selectPriceElement.setAttribute(`placeholder`, typeToMinPrice[selectTypeElement.value]);
}

const setupSelectType = () => {
  selectTypeElement.addEventListener(`change`, onSelectTypeChange);
}

// ***

const onSelectPriceInvalid = () => {
  const message = `` + 
    `Цена типа ${selectTypeElement.value} ` + 
    `меняется от ${typeToMinPrice[selectTypeElement.value]} ` + 
    `до ${1_000_000} `; 
    selectPriceElement.setCustomValidity(message);
}

const setupSelectPrice = () => {
  selectPriceElement.required = true;
  selectPriceElement.setAttribute(`min`, typeToMinPrice[selectTypeElement.value]);
  selectPriceElement.setAttribute(`placeholder`, typeToMinPrice[selectTypeElement.value]);
  selectPriceElement.setAttribute(`max`, 1_000_000);

  selectPriceElement.addEventListener(`invalid`, onSelectPriceInvalid);

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

const moveMapFiltersIntoUnactivePhase = () => {
  mapFiltersElement.classList.add(`map__filters--disabled`);
  Array.from(mapFiltersElement.children).map(selectElement => selectElement.disabled = true);
}

const moveMapFiltersIntoActivePhase = () => {
  mapFiltersElement.classList.remove(`map__filters--disabled`);
  Array.from(mapFiltersElement.children).map(selectElement => selectElement.disabled = false);
}

const moveAdFromIntoUnactivePhase = () => {
  adFormElement.classList.add(`ad-form--disabled`);
  Array.from(adFormElement.children).map(fieldsetElement => fieldsetElement.disabled = true);
}

const moveAdFromIntoActivePhase = () => {
  adFormElement.classList.remove(`ad-form--disabled`);
  Array.from(adFormElement.children).map(fieldsetElement => fieldsetElement.disabled = false);
}

// ***


// ***

export const setupForm = () => {
  adFormElement.method = 'POST';
  adFormElement.action = 'https://22.javascript.pages.academy/keksobooking';
  adFormElement.enctype = 'multipart/form-data';

  moveMapFiltersIntoUnactivePhase();
  moveAdFromIntoUnactivePhase();

  moveMapFiltersIntoActivePhase();
  moveAdFromIntoActivePhase();

  setupTitle();
  setupSelectType();
  setupSelectPrice();
  setupSelectTimeinTimeout();
}