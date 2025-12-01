const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

const currentCalculation = document.getElementById('current-calculation');

function createWriteOutput(result, operator, enteredNumber) {
  const calculationDescrip = `${result} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calculationDescrip);
}


function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
          
const defaultResult=0;
let currentResult= defaultResult;

function calculateResult(calculationType) {
  const enteredNumber = parseInt(userInput.value);
  const Result = currentResult;
  let mathOperator;

  if (calculationType === "ADD") {
      currentResult= currentResult + enteredNumber;
      mathOperator = "+";
  }
  if(calculationType==="SUBTRACT"){
    currentResult = currentResult - enteredNumber;
    mathOperator = "-";
  }
  createWriteOutput(Result, mathOperator, enteredNumber)
}
  
  
function add() {
  calculateResult("ADD");
}

function subtract(){
  calculateResult("SUBTRACT")
}



addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
