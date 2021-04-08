import { renderMap, renderMapOnRequestError } from "./_map.js";
import { setupFormAdForm } from "./_ad-form.js";

setupFormAdForm();

fetch(`https://22.javascript.pages.academy/keksobooking/data`)
  .then(response => response.json())
  .then(datalist => {
    renderMap(datalist)
  })
  .catch( (err) => {
    renderMapOnRequestError()
    console.error(err)
  }
)