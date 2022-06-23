const firstNumber = parseFloat(prompt("Enter first number"));
const operator = prompt("Enter the arithmetic operator.");
const secondNumber = parseFloat(prompt("Enter the second number")); 

const operators = ["+", "-", "/", "*", "%"];

function showResult(){
    if(operators.includes(operator)){
        let result = eval(`${firstNumber}${operator}${secondNumber}`);
        return result;
    }
    
    else{
        return `Syntax error`;
    }
}

showResult();