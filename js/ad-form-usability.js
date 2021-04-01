const adFormElement = document.querySelector(`.ad-form`);
const inputTitleElement = adFormElement.querySelector(`#title`);
const selectTypeElement = adFormElement.querySelector(`#type`);
const selectPriceElement = adFormElement.querySelector(`#price`);
const selectTimeinElement = adFormElement.querySelector(`#timein`);
const selectTimeoutElement = adFormElement.querySelector(`#timeout`);
const selectRoomNumberElement = adFormElement.querySelector(`#room_number`);
const selectCapacityElement = adFormElement.querySelector(`#capacity`);

const TYPE_TO_MIN_PRICE = {
  "bungalow" : 0,
  "flat"     : 1000,
  "house"    : 5000,
  "palace"   : 10000,
}

const ROOM_NUMBER_TO_POSSIBLE_COPAPICITY = {
  1: [1],
  2: [1,2],
  3: [1,2,3],
  100: [0],
}

// ***
//
// SYNCS 

//  timein & timeout
const syncTimeinToTimeout = () => selectTimeoutElement.value = selectTimeinElement.value;
const syncTimoutToTimein = () => selectTimeinElement.value = selectTimeoutElement.value;

// type & price
const syncTypeToPrice = () => {
  const minPrice = TYPE_TO_MIN_PRICE[selectTypeElement.value];

  selectPriceElement.setAttribute(`placeholder`, minPrice);
  selectPriceElement.setAttribute(`min`, minPrice);
}

// type & price
const syncRoomsCopapicity = () => {
  const roomNumber = parseInt(selectRoomNumberElement.value);
  const possibleOptionCapacityValues = ROOM_NUMBER_TO_POSSIBLE_COPAPICITY[roomNumber];

  const optionCapacityElementList = Array.from(selectCapacityElement.querySelectorAll(`option`));

  optionCapacityElementList.map(optionCapacityElement => {
    optionCapacityElement.disabled = false;;
  });

  optionCapacityElementList.map(optionCapacityElement => {
    const optionCapacityValue = parseInt(optionCapacityElement.value);
  
    if ( possibleOptionCapacityValues.indexOf(optionCapacityValue) === -1 ) {
      optionCapacityElement.disabled = true;
    } else {
      optionCapacityElement.selected = true;
    }
  });
}

// *** 
// 
//  INTERACTIONS 

//  timein & timeout
const onSelectTimeinChange = () => syncTimeinToTimeout();
const onSelectTimeoutChange = () => syncTimoutToTimein();

const setupSelectTimeinTimeoutInteraction = () => {
  selectTimeinElement.addEventListener(`change`, onSelectTimeinChange)
  selectTimeoutElement.addEventListener(`change`, onSelectTimeoutChange)
}

// type & price
const onSelectTypeChange = () => syncTypeToPrice();
const setupSelectTypePriceInteraction = () => selectTypeElement.addEventListener(`change`, onSelectTypeChange);

// rooms & copacity
const onSelectRoomsNumberChange = () => syncRoomsCopapicity();
const setupSelectRoomsNumberCopacityInteraction = () => selectRoomNumberElement.addEventListener(`change`, onSelectRoomsNumberChange);


// ***
//
//  DEFAULT ATTRIBUTES 


// title
const setInputTitleElementDefaultAttributes = () => {
  inputTitleElement.setAttribute(`required`, `required`);
  inputTitleElement.setAttribute(`minlength`, 2);
  inputTitleElement.setAttribute(`maxlength`, 100);
}

// type
const setSelectTypeElementDefaultAttributes = () => selectTypeElement.value = `flat`;

// price
const setSelectPriceElementDefaultAttributes = () => {
  selectPriceElement.setAttribute(`required`, `required`);
  selectPriceElement.setAttribute(`type`, `number`);
  selectPriceElement.setAttribute(`max`, 1_000_000);
}

// rooms
const setSelectRoomNumberElementDefaultAttributes = () => selectRoomNumberElement.value = 1;

// ***
//
// SETUP

// 1 этап. Установили необходимые настройки
// 2 этап. Установили возможные значения в зависимости от других полей
// 3 этап. Навесили обработчики на интерактивные элементы. 
export const setupAdFormUsability = () => {
  setInputTitleElementDefaultAttributes();
  setSelectTypeElementDefaultAttributes();
  setSelectPriceElementDefaultAttributes();
  setSelectRoomNumberElementDefaultAttributes();
  
  syncTypeToPrice();
  syncRoomsCopapicity();

  setupSelectTimeinTimeoutInteraction();
  setupSelectTypePriceInteraction();
  setupSelectRoomsNumberCopacityInteraction();
}
