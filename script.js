// 1. Create calculation functions
function add(num1, num2) {
    // This function adds two numbers and returns the result.
    return num1 + num2;
}

function subtract(num1, num2) {
    // This function subtracts the second number from the first and returns the result.
    return num1 - num2;
}

function multiply(num1, num2) {
    // This function multiplies two numbers and returns the result.
    return num1 * num2;
}

function divide(num1, num2) {
    // This function divides the first number by the second and returns the result.
    if (num2 === 0) {
        // error check
        alert("Cannot divide by zero");
    }
    return num1 / num2;
}

// 2. Add variables for operation
let num1 = 0, num2 = 0, operator = '';

// 3. Create a function to perform the calculation based on the operator
function operate(num1, num2, operator) {
    // use switch for case base operation
    switch (operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: alert('Unknown operation');
    }
}

// reference to calculator div
const btnContainer = document.getElementById('calculator');

// 4. Create buttons for numbers 0-9
for (let i = 0; i <= 9; i++) {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = i;
    btnContainer.appendChild(btn);
}