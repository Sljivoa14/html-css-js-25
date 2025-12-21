const randomNumber = document.getElementById("randomNumber");
const btnGenerate = document.getElementById("generateButton");        
const broj = document.getElementById("broj");

function generateRandomNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1; 
    broj.textContent = randomNum;
}

btnGenerate.addEventListener("click", generateRandomNumber);

/*document.getElementById("btn").addEventListener("click", function () {
  let broj = Math.ceil(Math.random() * 100);
  document.getElementById("rezultat").textContent = "Random broj: " + broj;
});*/