const num1 = document.getElementById("inputnumber");
const num2 = document.getElementById("inputnumber2");
const logBtn = document.getElementById("button");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function mtply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function logOperations() {
    let a = Number(inputnumber.value);
    let b = Number(inputnumber2.value);

    console.log(`${a}+${b} = ${add(a, b)}`);
    console.log(`${a}-${b} = ${subtract(a, b)}`);
    console.log(`${a}*${b} = ${mtply(a, b)}`);
    console.log(`${a}/${b} = ${divide(a, b)}`);
}

logBtn.addEventListener("click", logOperations);
