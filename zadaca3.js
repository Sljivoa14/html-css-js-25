let result = 0;
const resultEl = document.getElementById("result");

const add1Btn = document.getElementById("add1");
const add5Btn = document.getElementById("add5");
const add10Btn = document.getElementById("add10");

const sub1Btn = document.getElementById("sub1");
const sub5Btn = document.getElementById("sub5");
const sub10Btn = document.getElementById("sub10");

function change(value) {
        result = result + value;
        resultEl.innerText=result;
    
    }

add1Btn.addEventListener("click",() =>change(1));
add5Btn.addEventListener("click",() =>change(5));
add10Btn.addEventListener("click",() => change (10));

sub1Btn.addEventListener("click",() =>change(-1));
sub5Btn.addEventListener("click",() =>change(-5));
sub10Btn.addEventListener("click",() =>change (-10));
