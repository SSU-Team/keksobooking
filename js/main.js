'use strict';

import { generateData } from "./data.js";
import { renderMap } from "./map.js";
import { setupAdFormValidity } from "./ad-form-validity.js";
import { setupAdFormUsability } from "./ad-form-usability.js";

const dataList = generateData();

renderMap( dataList );

// setupAdFormValidity();
setupAdFormUsability();
