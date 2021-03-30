const adFormElement = document.querySelector(`.ad-form`);

// ***

const inputTitleElement = adFormElement.querySelector(`#title`);

const onInputTitleElementInvalid = () => {
    let message = '';

    if (inputTitleElement.validity.valueMissing === true) {
        message = `Обязательное поле. Должен содержать от 30 до 100 символов.`;
    } else if (inputTitleElement.validity.tooShort === true) {
        message = `Заголовок слишком короткий: ${inputTitleElement.value.length} символов. Должен содержать от 30 до 100 символов.`;
    } else if (inputTitleElement.validity.tooLong) {
        message = `Заголовок слишком короткий: ${inputTitleElement.value.length} символов. Должен содержать от 30 до 100 символов.`;
    } else {
        message = ``;
    } 

    inputTitleElement.setCustomValidity(message);
}

const setInputTitleElementDefaultAttributes = () => {
    inputTitleElement.setAttribute(`required`, `required`);
    inputTitleElement.setAttribute(`minlength`, 30);
    inputTitleElement.setAttribute(`maxlength`, 100);
}

// ***

const selectPriceElement = adFormElement.querySelector(`#price`);
const selectTypeElement = adFormElement.querySelector(`#type`);

const typeToMinPrice = {
    "flat"     : 1000,
    "house"    : 5000,
    "palace"   : 10000,
    "bungalow" : 0,
}

const typeToText = {
    "flat"     : `Квартира`,
    "house"    : `Дом`,
    "palace"   : `Дворец`,
    "bungalow" : `Бунгало`,
}

const onSelectPriceElementInvalid = () => {
    let message = '';

    if (selectPriceElement.validity.valueMissing === true) {
        message = `Обязательное поле.`;
    } else if (selectPriceElement.validity.typeMismatch === true) {
        message = `Поле должно содержать числовое значение.`;
    } else if (selectPriceElement.validity.rangeOverflow === true) {
        message = `Цена не превышает 1 000 000.`;
    } else if (selectPriceElement.validity.rangeUnderflow === true) {
        message = `Минимальная цена для типа ${typeToText[selectTypeElement.value]} составляет ${typeToMinPrice[selectTypeElement.value]}.`;
    } else {
        message = ``;
    } // if we move this section into submit event and check all the inputs, this way we could check all the fields.

    switch (true) {
        case selectPriceElement.validity.valueMissing:
            selectPriceElement.setCustomValidity(`Обязательное поле.`);
            break;
        case selectPriceElement.validity.typeMismatch:
            selectPriceElement.setCustomValidity(`Поле должно содержать числовое значение.`);
            break;
        case selectPriceElement.validity.rangeOverflow:
            
            
    }

    selectPriceElement.setCustomValidity(message);
}

const setSelectPriceElementDefaultAttributes = () => {
    selectPriceElement.setAttribute(`required`, `required`);
    selectPriceElement.setAttribute(`type`, `number`);
    selectPriceElement.setAttribute(`max`, 1_000_000);
}

// ***

const selectTimeinElement = adFormElement.querySelector(`#timein`);
const selectTimeoutElement = adFormElement.querySelector(`#timeout`);

const onSelectTimeinElementInvalid = () => {
    const message = `Время заезда и выезда должны совпадать`;
    selectTimeoutElement.setCustomValidity(message);
}

// ***

const onAdFormInvalid = () => {
    if (inputTitleElement.validity.valid === false) {
        onInputTitleElementInvalid();
    } else if (selectPriceElement.validity.valid === false) {
        onSelectPriceElementInvalid();
    } else if (selectTimeoutElement.value !== selectTimeinElement.value) {
        onSelectTimeinElementInvalid(); // will never workout if only this is incorrect, cuz form invalid doesnt pop on this expression.
    } 
}

// *** 




// ***

const setAdFormDefaultAttributes = () => {
    adFormElement.method = 'POST';
    adFormElement.action = 'https://22.javascript.pages.academy/keksobooking';
    adFormElement.enctype = 'multipart/form-data';
}

export const setupAdFormValidity = () => {

    setAdFormDefaultAttributes();

    setInputTitleElementDefaultAttributes();
    setSelectPriceElementDefaultAttributes();

    adFormElement.addEventListener(`invalid`, onAdFormInvalid, true);
}






// Поле «Количество комнат» синхронизировано с полем «Количество мест» таким образом, что при выборе количества комнат вводятся ограничения на допустимые варианты выбора количества гостей:
// 1 комната — «для 1 гостя»;
// 2 комнаты — «для 2 гостей» или «для 1 гостя»;
// 3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»;
// 100 комнат — «не для гостей».