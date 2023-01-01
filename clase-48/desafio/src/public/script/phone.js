/*============================[Validacion de telfono]============================*/

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const info = document.querySelector(".alert-info");
const error = document.querySelector(".alert-error");
const submitForm = document.querySelector(".submit-form");

function process(event) {
    event.preventDefault();

    info.style.display = "none";
    error.style.display = "none";

    if (phoneInput.isValidNumber()) {
        info.style.display = "";
        info.innerHTML = `Valido`;
        // agrega la propiedad enabled al boton
        submitForm.disabled = false;
    } else {
        error.style.display = "";
        error.innerHTML = `Número invalido`;
        submitForm.disabled = true;
    }
    return false;
}
