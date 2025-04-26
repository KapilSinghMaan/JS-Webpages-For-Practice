// Temperature Conversion

const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("CtF");
const toCelcius = document.getElementById("FtC");
const result = document.getElementById("result");
let temp;

function covert() {
    if (toFahrenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";
    }
    else if (toCelcius.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Select any conversion"
    }
}