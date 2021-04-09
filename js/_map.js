import { renderMap, renderMapOnRequestError } from "./_map-canvas.js"

export const setupMap = () => {

  fetch(`https://22.javascript.pages.academy/keksobooking/data`)
  .then(response => response.json())
  .then(datalist => {
    renderMap(datalist)
    // setupFilterForm( renderMap.bind(null, datalist) ) // cb action // как передавать данные для отрисовки?
  })
  .catch( (err) => {
    renderMapOnRequestError()
    console.error(err)
  })

}