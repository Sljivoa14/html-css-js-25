/*let slika = document.getElementById("slika");
const btnMessi = document.getElementById("Messi");
const btnRonaldo = document.getElementById("Ronaldo");
const btnDzeko = document.getElementById("Dzeko");

function changeImage() {
    if (slika.src.match("Messi")) {
        slika.src = "messi.jpeg";
    } else if (slika.src.match("Ronaldo")) {
        slika.src = "ronaldo.jpg";
    } else {
        slika.src = "Dzeko.jpg";
    }
}*/

const img = document.getElementById("igrac");

document.getElementById("messi").addEventListener("click", function () {
  promijeni("messi");
});

document.getElementById("ronaldo").addEventListener("click", function () {
  promijeni("ronaldo");
});

document.getElementById("dzeko").addEventListener("click", function () {
  promijeni("dzeko");
});

function promijeni(igrac) {
  if (igrac === "messi") {
    img.src = "messi.jpeg";
  } else if (igrac === "ronaldo") {
    img.src = "ronaldo.jpg";
  } else {
    img.src = "Dzeko.jpg";
  }
}
