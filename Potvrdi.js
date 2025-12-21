const input = document.getElementById("nameInput");
const potvrdiBtn = document.getElementById("confirmBtn");
const poruka = document.getElementById("message");  

potvrdiBtn.addEventListener("click", () => {
    if (input.value.trim() === "") {
        poruka.textContent = "Input nemoze biti prazan!";
        poruka.style.color = "red";
    } else {
        poruka.textContent = "uspjesno uneseno!";
        poruka.style.color = "green";
    }
});