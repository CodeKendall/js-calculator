// Load the readline module to handle command line input and output
const readline = require('readline');

// Create a readline interface using standard input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array to store integers entered by the user
let numbers = [];

// Function to prompt the user for input recursively
const askInput = () => {
    rl.question('Enter an integer or "q" to quit: ', input => {
        // Check if the input is 'q' or 'Q' to quit the program
        if (input.toLowerCase() === 'q') {
            rl.close(); // Close the readline interface
            echoNumbers(); // Call function to display entered numbers
            checkProductCondition(); // Call function to check product condition
        } else if (isValidNumber(input)) {
            numbers.push(parseInt(input)); // Add valid integer to numbers array
            askInput(); // Recursively ask for next input
        } else {
            console.log("Error: Please enter a valid integer or 'q' to quit.");
            askInput(); // Recursively ask for next input on error
        }
    });
};

// Helper function to validate if the provided input is a valid integer
const isValidNumber = input => {
    return !isNaN(input) && Number.isInteger(parseFloat(input));
};

// Function to echo back the numbers entered by the user
const echoNumbers = () => {
    console.log("Integers entered:", numbers.join(', '));
};

// Function to check if the product of any two numbers equals a third number
const checkProductCondition = () => {
    let found = false;
    // Iterate over each combination of numbers in the array
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            for (let k = 0; k < numbers.length; k++) {
                if (i !== k && j !== k && numbers[i] * numbers[j] === numbers[k]) {
                    console.log(`Condition is met: ${numbers[i]} x ${numbers[j]} = ${numbers[k]}`);
                    found = true; // Set found to true if condition is met
                }
            }
        }
    }
    if (!found) {
        console.log('Condition was not met.'); // Notify user if no condition was met
    }
};

// Start the input prompt
askInput();