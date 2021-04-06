import { generateData } from "./_mock-data.js";
import { renderMap } from "./_map.js";
import { setupFormAdForm } from "./_ad-form.js";

const dataList = generateData();
renderMap( dataList );
setupFormAdForm();


