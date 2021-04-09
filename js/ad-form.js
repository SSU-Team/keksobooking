import { setupFormAdFormValidity } from "./ad-form-validity.js";
import { setupFormAdFormUsability } from "./ad-form-usability.js";

export const setupFormAdForm = () => {
    setupFormAdFormValidity();
    setupFormAdFormUsability();
}