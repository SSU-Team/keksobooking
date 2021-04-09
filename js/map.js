import { renderMap, renderMapOnRequestError } from "./map-canvas.js"
import { setupMapFiltersFormElement } from './map-filters.js'

export const setupMap = () => {

  fetch(`https://22.javascript.pages.academy/keksobooking/data`)
    .then(response => response.json())
    .then(datalist => {
      renderMap(datalist)
      setupMapFiltersFormElement( renderMap.bind(null, datalist) )
    })
    .catch( (err) => {
      renderMapOnRequestError()
      console.log(err)
    })

  
}