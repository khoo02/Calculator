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
    return num1 / num2; // Divide and return the result
}

// 2. Add global variables for operation
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
// Create a variable to hold the current input for display
let currentInput = '';

// Get references to display and buttons in HTML
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// 5. Create function to populate display
populateDisplay = (string) => {
    // This function updates the display with the current input or result.
    display.textContent = string; // Set the display text to the provided string
}

// 6. Make calculator work with operate() function when = is pressed
buttons.forEach(button => { // button represents current button in the loop
    // Add event listener to each button
    button.addEventListener('click', () => {
        const value = button.textContent; // value of the button clicked

        // If button is a number or decimal point
        if (!isNaN(value) || value === '.') {
            currentInput += value; // Append the number to current input
            populateDisplay(currentInput)// Update display
        }
        // If button is an operator (+, -, *, /)
        else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                // If there's already an operator, perform the previous operation first
                if (operator !== '' && num1 !== null) {
                    num2 = parseFloat(currentInput);
                    const result = operate(num1, num2, operator);
                    populateDisplay(result);
                    num1 = result;
                } else {
                    num1 = parseFloat(currentInput);
                }
                operator = value; // Set the new operator
                currentInput = '';
            } else if (operator !== '' && num1 !== null) {
                // Allow changing the operator if pressed consecutively
                operator = value;
            }
        }
        // If button is the equals sign
        else if (value === '=') {
            if (currentInput !== '' && operator !== '') {
                num2 = parseFloat(currentInput); // Store the second number
                const result = operate(num1, num2, operator); // Perform the operation
                populateDisplay(result); // Display the result
                // Reset for next calculation
                num1 = result; // Store result as num1 for potential further calculations
                num2 = 0; // Reset num2
                operator = ''; // Reset operator
                currentInput = ''; // Reset current input
            }
        }
        // If button is clear (C)
        else if (value === 'C') {
            // Reset all variables and display
            num1 = 0;
            num2 = 0;
            operator = '';
            currentInput = '';
            populateDisplay('0'); // Reset display
        }
        // If button is backspace (←)
        else if (value === '←') {
            // Remove the last character from current input
            currentInput = currentInput.slice(0, -1); // Return string with one character less
            display.textContent = currentInput || '0'; // If string is empty, display 0
        }
    })
});

// 7. Add keyboard support
// Add event listener for mouse click on display text
display.addEventListener('click', () => {
    // Focus the display to allow keyboard input
    display.focus();
    // Add event listener for keydown events
    display.addEventListener('keydown', (event) => {
        const key = event.key; // Get the key pressed
        // If key is a number or decimal point})
        if (!isNaN(key) || key === '.') {
            currentInput += key; // Append the number to current input
            populateDisplay(currentInput); // Update display
        }
        // If key is an operator (+, -, *, /)
        else if (['+', '-', '*', '/'].includes(key)) {
            if (currentInput !== '') {
                // If there's already an operator, perform the previous operation first
                if (operator !== '' && num1 !== null) {
                    num2 = parseFloat(currentInput);
                    const result = operate(num1, num2, operator);
                    populateDisplay(result);
                    num1 = result;
                } else {
                    num1 = parseFloat(currentInput);
                }
                operator = key; // Set the new operator
                currentInput = '';
            } else if (operator !== '' && num1 !== null) {
                // Allow changing the operator if pressed consecutively
                operator = key;
            }
        }
    })
});