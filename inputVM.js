const input = document.getElementById("nameInput");
const velikaBtn = document.getElementById("velika");
const maloBtn = document.getElementById("malo");
const poruka = document.getElementById("message");

velikaBtn.addEventListener("click", () => {
    poruka.textContent = input.value.toUpperCase()
    poruka.style.color = "blue";
});

maloBtn.addEventListener("click", () => {
   poruka.textContent = input.value.toLowerCase();
   poruka.style.color = "blue";
});                 

/*result.textContent = input.value.toUpperCase();
result.textContent = input.value.toLowerCase();

velikaBtn.addEventListener("click", () => {
    input.style.fontSize = "30px";
    poruka.textContent = input.value;
    poruka.style.fontSize = input.style.fontSize
});

maloBtn.addEventListener("click", () => {
    input.style.size = "10px";
    poruka.textContent = input.value;
    poruka.style.fontSize = input.style.fontSize;
});  */               