const onInputTitleInput = () => {
  console.log(inputTitleElement.validity);
  let message = ``;

  if (inputTitleElement.validity.tooShort) {
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

const setupSelectPrice = () => {
  selectPriceElement.required = true;
  selectPriceElement.setAttribute(`min`, typeToMinPrice[selectTypeElement.value]);
  selectPriceElement.setAttribute(`placeholder`, typeToMinPrice[selectTypeElement.value]);
  selectPriceElement.setAttribute(`max`, 1_000_000);

  selectPriceElement.addEventListener(`invalid`, onSelectPriceInvalid);
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

export const setupForm = () => {
  adFormElement.method = 'POST';
  adFormElement.action = 'https://22.javascript.pages.academy/keksobooking';
  adFormElement.enctype = 'multipart/form-data';

  moveMapFiltersIntoUnactivePhase();
  moveAdFromIntoUnactivePhase();

  moveMapFiltersIntoActivePhase();
  moveAdFromIntoActivePhase();

  setupTitle();

  setupSelectPrice();
}