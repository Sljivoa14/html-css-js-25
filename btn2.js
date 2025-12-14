let result = 1;
const hResult = document.getElementById("result");
const mltply2 = document.getElementById("2x");
const dvide2 = document.getElementById("2/");

let value = Number(hResult.innerHTML);

function multiply(num) {
    value *= num;
    hResult.innerHTML = value;
}

function divide(num) {
    value /= num;
    hResult.innerHTML = value;
}

mltply2.addEventListener("click", () => multiply(2));
dvide2.addEventListener("click", () => divide(2));
