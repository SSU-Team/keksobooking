import { setupFormAdFormValidity } from "./__ad-form-validity.js";
import { setupFormAdFormUsability } from "./__ad-form-usability.js";

export const setupFormAdForm = () => {
    setupFormAdFormValidity();
    setupFormAdFormUsability();
}