// Asking user to enter first number 
let firstNum = Number(prompt("Hey! Please enter your first number! 🔢"))

// Asking user to enter second number 
let secondNum = Number(prompt("Hey! Please enter your second number! 🔢"))

// Asking user to choose which calculation they would like to perform
let operator = prompt(`Please chooose which operation you would like to perform:
- add ➕ (type "add")
- substract ➖ (type "substract")
- multiply ❌ (type "multiply")
- divide ➗ (type "divide")`)

// Creating variable to store total of the calculation
let total;

// Function to add first number to the second number
function add(num1, num2) {
    return total = num1 + num2;
};

// Function to substract the second number from the first number
function substract(num1, num2) {
    return total = num1 - num2;
};

// Function to multiply first and second numbers
function multiply(num1, num2) {
    return total = num1 * num2;
};

// Function to divide first number by second number
function divide(num1, num2) {
    return total = num1 / num2;
};

// Function to put the output for user together keeping the code dry
function output(operatorSign) {
    console.log(`${firstNum} ${operatorSign} ${secondNum} = ${total}` )
}


// If statement to determine which operation to perform depending on user's input
if(operator === "add") {
    add(firstNum,secondNum);
    output("+");
} else if (operator === "substract") {
    substract(firstNum,secondNum);
    output("-")
} else if (operator === "multiply") {
    multiply(firstNum,secondNum);
    output("x");
} else if (operator === "divide") {
    divide(firstNum, secondNum);
    output("÷");
} else {
    console.log(`Looks like "${operator}" is not a valid operator. Please refresh the browser to try again🥶`)
}