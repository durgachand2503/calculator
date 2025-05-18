let display = document.getElementById("display");
let CurrentInput = "";

function appendNumber(num){
    if (display.textContent === "0" || currentInput === "0") {
        currentInput = num;
    } else {
        currentInput += num;
    }
    display.textContent = currentInput;
}

function appendOperator(op){
    if (/[+\-*/]$/.test(currentInput)) {
        currentInput = currentInput.slice(0,-1) + op;
    } else{
        currentInput += op;
    }
        display.textContent = currentInput;
}

function appendDot(dot){
    const parts = currentInput.split(/[+\-*/]/);
    if (!parts[parts.length -1 ].includes('.')) {
        currentInput += dot;
        display.textContent = currentInput;
    }
}

function clearDisplay(){
    currentInput = "";
    display.textContent = "0";
}

function deleteLast() {
      if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput;
      } else {
        currentInput = "";
        display.textContent = "0";
      }
    }

function calculate(){
    try{
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
    }
    catch (error) {
        display.textContent = "Error";
        currentInput = "";
    }
}