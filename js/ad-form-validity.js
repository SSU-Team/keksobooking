const adFormElement = document.querySelector(`.ad-form`);
const inputTitleElement = adFormElement.querySelector(`#title`);
const selectTypeElement = adFormElement.querySelector(`#type`);
const selectPriceElement = adFormElement.querySelector(`#price`);
const selectTimeinElement = adFormElement.querySelector(`#timein`);
const selectTimeoutElement = adFormElement.querySelector(`#timeout`);
const selectRoomNumberElement = adFormElement.querySelector(`#room_number`);
const selectCapacityElement = adFormElement.querySelector(`#capacity`);

const TITLE_MIN_LENGTH = 10;
const TITLE_MAX_LENGTH = 100;

const indicateTitleInvalidity = () => {

}

const isTitleValid = () => {
    if ( inputTitleElement.value.length >= TITLE_MIN_LENGTH && inputTitleElement.value.length <= TITLE_MAX_LENGTH) {
        return true;
    } else {
        return false;
    }
}

const onAdFormSubmit = () => {
    const isAdFormValid = false;

    console.log(`CHECK:`)
    debugger;
    console.log(inputTitleElement.value >= 10);

    if (isTitleValid) {

    } else {
        event.preventDefault();

    }
}

// ***

const setAdFormDefaultAttributes = () => {
    adFormElement.method = 'POST';
    adFormElement.action = 'https://22.javascript.pages.academy/keksobooking';
    adFormElement.enctype = 'multipart/form-data';
}

export const setupAdFormValidity = () => {
    setAdFormDefaultAttributes();



    adFormElement.addEventListener(`submit`, onAdFormSubmit);
}


/*


switch (true) {
        // inputTitleElement
        case !( inputTitleElement.value.length >= 10 ):
            event.preventDefault();
            inputTitleElement.setCustomValidity(`Слишком коротко!!.`);
            inputTitleElement.reportValidity();
            console.log("1.1")
            break;
        case inputTitleElement.validity.tooShort:
            inputTitleElement.setCustomValidity(`Заголовок слишком короткий: ${inputTitleElement.value.length} символов. Должен содержать от 30 до 100 символов.`);
            console.log("1.2")
            break;
        case inputTitleElement.validity.tooLong:
            inputTitleElement.setCustomValidity(`Заголовок слишком длинный: ${inputTitleElement.value.length} символов. Должен содержать от 30 до 100 символов.`);
            console.log("1.3")
            break;
        case !(inputTitleElement.validity.valueMissing || inputTitleElement.validity.tooShort || inputTitleElement.validity.tooLong): 
            inputTitleElement.setCustomValidity(``);
            console.log("1.0")
    }   


switch (true) {
        // selectPriceElement
        case selectPriceElement.validity.valueMissing:
            console.log("2.1");
            selectPriceElement.setCustomValidity(`Обязательное поле.`);
            break;
        case selectPriceElement.validity.typeMismatch:
            console.log("2.2");
            selectPriceElement.setCustomValidity(`Поле должно содержать числовое значение.`);
            break;
        case selectPriceElement.validity.rangeOverflow:
            console.log("2.3");
            selectPriceElement.setCustomValidity(`Цена не превышает 1 000 000.`);
            break;
        case selectPriceElement.validity.rangeUnderflow:
            console.log("2.4");
            selectPriceElement.setCustomValidity(`Минимальная цена для типа ${typeToText[selectTypeElement.value]} составляет ${typeToMinPrice[selectTypeElement.value]}.`);
            break;
        case !(selectPriceElement.validity.valueMissing || selectPriceElement.validity.typeMismatch || selectPriceElement.validity.rangeOverflow || selectPriceElement.validity.rangeUnderflow):
            console.log("2.0");
            selectPriceElement.setCustomValidity(``);
    }

    switch (true) {
        // selectTimeoutElement & selectTimeinElement
        case selectTimeoutElement.value !== selectTimeinElement.value:
            selectTimeoutElement.setCustomValidity(`Время заезда и Время выезда должны совпадать.`);
        case !(selectTimeoutElement.value !== selectTimeinElement.value):
            selectTimeoutElement.setCustomValidity(``);
    }

    switch (true) {
        // selectRoomNumberElement & selectCapacityElement
        case selectRoomNumberElement.value === 1 &&  selectCapacityElement.value > 1:
            selectCapacityElement.setCustomValidity(`1 комната — для 1 гостя.`);
            break;
        case selectRoomNumberElement.value === 2 &&  selectCapacityElement.value > 2:
            selectCapacityElement.setCustomValidity(`2 комнаты — для 2 гостей или для 1 гостя.`);
            break;
        case selectRoomNumberElement.value === 3 &&  selectCapacityElement.value > 3:
            selectCapacityElement.setCustomValidity(`3 комнаты — для 3 гостей, для 2 гостей или для 1 гостя.`);
            break;
        case selectRoomNumberElement.value === 100 && selectCapacityElement.value !== 0:
            selectCapacityElement.setCustomValidity(`100 комнат — не для гостей.`);
        case (selectRoomNumberElement.value <= selectCapacityElement.value && (selectRoomNumberElement.value === 100 && selectCapacityElement.value === 0) ):
            selectCapacityElement.setCustomValidity(``);
    }



*/