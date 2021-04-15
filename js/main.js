import { setupMap } from "./map.js"
import { setupFormAdForm } from "./ad-form.js"

setupMap()
setupFormAdForm()

console.log(1)

// main.js

// setCBOnFilterChange from filter
// filterData from filter
// renderPropertyPins from map
// getMainPinPos from map
// refreshPos from form

// fetch(api).then( (response) => {
// data = response.JSON()

// renderMap(data)
// setCBOnMainPinChange( ()=>{
// refreshPos( getMainPinPos() )
// })
// setCBOnFilterChange ( () => {
// renderPropertyPins( filterData(data) )
// })
// } )