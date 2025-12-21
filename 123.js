let sum = 0;
const result = document.getElementById("result");

function add(number) {
    sum += number;
    result.textContent = sum;
}
