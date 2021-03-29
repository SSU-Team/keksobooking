const adFormElement = document.querySelector(`.ad-form`);

const selectTypeElement = adFormElement.querySelector(`#type`);
const selectPriceElement = adFormElement.querySelector(`#price`);

const typeToMinPrice = {
  "bungalow" : 0,
  "flat"     : 1000,
  "house"    : 5000,
  "palace"   : 10000,
}

export const setupForm = () => {
  selectTypeElement.addEventListener('change', function() {
    selectPriceElement.setAttribute(`min`, typeToMinPrice[this.value]);
    selectPriceElement.setAttribute(`placeholder`, typeToMinPrice[this.value]);
  });

}