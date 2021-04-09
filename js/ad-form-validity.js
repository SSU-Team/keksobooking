// TODO add capacity validation without usability

const adFormElement = document.querySelector(`.ad-form`);
const inputTitleElement = adFormElement.querySelector(`#title`);
const selectTypeElement = adFormElement.querySelector(`#type`);
const selectPriceElement = adFormElement.querySelector(`#price`);
const selectTimeinElement = adFormElement.querySelector(`#timein`);
const selectTimeoutElement = adFormElement.querySelector(`#timeout`);
const selectRoomNumberElement = adFormElement.querySelector(`#room_number`);
const selectCapacityElement = adFormElement.querySelector(`#capacity`);

const TITLE_MIN_LENGTH = 30;
const TITLE_MAX_LENGTH = 100;

const TYPE_TO_MIN_PRICE = {
    "bungalow" : 0,
    "flat"     : 1000,
    "house"    : 5000,
    "palace"   : 10000,
}

const TYPE_TO_NAME = {
    "bungalow" : "Бунгало",
    "flat"     : "Квартира",
    "house"    : "Дом",
    "palace"   : "Дворец",
}

const MAX_PRICE = 1_000_000;

const setAdFormDefaultAttributes = () => {
    adFormElement.method = 'POST';
    adFormElement.action = 'https://22.javascript.pages.academy/keksobooking';
    adFormElement.enctype = 'multipart/form-data';
}

// ***

const showSelectTimeoutElementValidityStatus = () => {
    const timeinValue = selectTimeinElement.value;
    const timeoutValue = selectTimeoutElement.value;
    
    let message = ``;

    selectTimeoutElement.setCustomValidity(message);

    if (timeinValue !== timeoutValue) {
        message = `Время заезда и выезда должны совпадать. Дата выезда должна быть ${timeinValue}`;
    }

    if ( !(message === ``) ) {
        selectTimeoutElement.setCustomValidity(message);
    }

    selectTimeoutElement.reportValidity();
}

const showSelectPriceElementValidityStatus = () => {
    const typeValue = selectTypeElement.value;
    const typeText = TYPE_TO_NAME[typeValue];
    const minPrice = TYPE_TO_MIN_PRICE[typeValue];
    const priceValue = selectPriceElement.value;

    let message = ``;

    selectPriceElement.setCustomValidity(message);

    if (priceValue < minPrice) {
        message = `Минимальная цена для типа "${typeText}" составляет: ${minPrice}. У вас ${priceValue}.`;
    } else if (priceValue > MAX_PRICE) {
        message = `Максимальная цена для типа "${typeText}" составляет: ${minPrice}. У вас ${priceValue}.`;
    }

    if ( !(message === ``) ) {
        selectPriceElement.setCustomValidity(message);
    }

    selectPriceElement.reportValidity()
}

const showTitleElementValidityStatus = () => { 
    const valueLength = inputTitleElement.value.length;

    let message = '';

    inputTitleElement.setCustomValidity(``);

    if (valueLength < TITLE_MIN_LENGTH) {
        message = `Заголовок слишком короткий. Количество символов должно составлять не менее ${TITLE_MIN_LENGTH}. У вас ${valueLength}.`;
    } else if (valueLength > TITLE_MAX_LENGTH) {
        message = `Заголовок слишком длинный. Количество символов должно составлять не более ${TITLE_MAX_LENGTH}. У вас ${valueLength}.`;
    }
    
    if ( !(message === '') ) {
        inputTitleElement.setCustomValidity(message)
    }
    
    inputTitleElement.reportValidity();
}

const validateFormAdFormElement = () => {
    showTitleElementValidityStatus();
    showSelectPriceElementValidityStatus();
    showSelectTimeoutElementValidityStatus();
}

// ***

const onSelectPriceElementInput = () => {
    showSelectPriceElementValidityStatus();
}

const onSetupSelectTimeoutElementBlur = () => {
    showSelectTimeoutElementValidityStatus();

    selectTimeoutElement.addEventListener(`input`, onSetupSelectTimeoutElementInput);
}

const onSetupSelectTimeoutElementInput = () => {
    showSelectTimeoutElementValidityStatus();
}

const onSelectPriceElementBlur = () => {
    showSelectPriceElementValidityStatus();

    selectPriceElement.addEventListener(`input`, onSelectPriceElementInput);
}

const onInputTitleElementInput = () => {
    showTitleElementValidityStatus()
}

const onInputTitleElementBlur = () => {
    showTitleElementValidityStatus();

    inputTitleElement.addEventListener(`input`, onInputTitleElementInput);
}

const onFormAdFormElementSubmit = () => {
    validateFormAdFormElement();
}

// ***

const setupSelectTimeoutElement = () => {
    selectTimeoutElement.addEventListener(`blur`, onSetupSelectTimeoutElementBlur);
}

const setupSelectPriceElement = () => {
    selectPriceElement.addEventListener(`blur`, onSelectPriceElementBlur);
}

const setupInputTitleElement = () => {
    inputTitleElement.addEventListener(`blur`, onInputTitleElementBlur);    
}

// ***

export const setupFormAdFormValidity = () => {
    setAdFormDefaultAttributes();

    setupInputTitleElement();
    setupSelectPriceElement();
    setupSelectTimeoutElement();

    adFormElement.addEventListener(`submit`, onFormAdFormElementSubmit);
}
