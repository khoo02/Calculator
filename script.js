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

    // Store button input into variables
    let currentInput = ''; // Variable to hold the current input for display

    const display = document.getElementById('display'); // reference to the display element
    const buttons = document.querySelectorAll('.btn'); // reference to all buttons

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent; // value of the button clicked
            
            // Check if the button is a number
            if (!isNaN(value) || value === '.') {
                currentInput += value; // Append the number to current input
                display.textContent = currentInput; // Update display
            }
            // Check if the button is an operator
            else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    // If there's a current input, store it as num1
                    num1 = parseFloat(currentInput);
                    operator = value; // Set the operator
                    currentInput = ''; // Reset current input for next number
                }
            }
            // Check if the button is the equals sign
            else if (value === '=') {
                if (currentInput !== '' && operator !== '') {
                    num2 = parseFloat(currentInput); // Store the second number
                    const result = operate(num1, num2, operator); // Perform the operation
                    display.textContent = result; // Display the result
                    // Reset for next calculation
                    num1 = result; // Store result as num1 for potential further calculations
                    num2 = 0; // Reset num2
                    operator = ''; // Reset operator
                    currentInput = ''; // Reset current input
                }
            }
            // Check if the button is the clear button
            else if (value === 'C') {
                // Reset all variables and display
                num1 = 0;
                num2 = 0;
                operator = '';
                currentInput = '';
                display.textContent = '0'; // Reset display
            }

        })
    });

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

// 6. Create function to populate display on button click
