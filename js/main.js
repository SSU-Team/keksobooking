'use strict';

import { generateData } from "./data.js";
import { renderMap } from "./map.js";
import { setupForm } from "./form.js";

const dataList = generateData();

setupForm();
renderMap( dataList );

