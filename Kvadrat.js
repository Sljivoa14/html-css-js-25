/*const square = document.getElementById("square");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

let size = 100;

plusBtn.addEventListener("click", () => {
    size += 20;
    square.style.width = size + "px";
    square.style.height = size + "px";
});

minusBtn.addEventListener("click", () => {
    if (size > 20) {
        size -= 20;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }
});*/

const square = document.getElementById("square");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

let size = 100;

plus.addEventListener("click", () => {
    size += 20;
    square.style.width = size + "px";
    square.style.height = size + "px";
});

minus.addEventListener("click", () => {
    if (size > 20) {
        square.style.width = size - "px";
        square.style.height = size -"px";
    }
});
