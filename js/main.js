'use strict';

import { generateData } from "./data.js";
import { renderMap } from "./map.js";
import { setupAdFormValidity } from "./ad-form-validity.js";
import { setupAdFormUsability } from "./ad-form-usability.js";

const dataList = generateData();

fetch(`https://22.javascript.pages.academy/keksobooking/data`)
  .then(response => response.json())
  .then(datalist => {
    renderMap(datalist)
  })

// renderMap( dataList );

setupAdFormValidity();
setupAdFormUsability();
