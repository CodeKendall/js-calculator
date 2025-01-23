const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

// Function to get numbers from the user
function getNumbers() {
    rl.question('Enter a number or type "d" to quit: ', input => {
        if (input.toLowerCase() === 'd') {
            if (numbers.length > 0) {
                displayResults();
            } else {
                console.log("No numbers entered.");
            }
            rl.close();
        } else {
            const number = parseInt(input, 10);
            if (isNaN(number)) {
                console.log("Invalid input. Please enter a valid number.");
                getNumbers();
            } else {
                numbers.push(number);
                getNumbers();
            }
        }
    });
}

// Function to calculate the mean of the numbers
function calculateMean() {
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
}

// Function to calculate the median of the numbers
function calculateMedian() {
    numbers.sort((a, b) => a - b);
    const midIndex = Math.floor(numbers.length / 2);
    if (numbers.length % 2 === 0) {
        return (numbers[midIndex - 1] + numbers[midIndex]) / 2;
    } else {
        return numbers[midIndex];
    }
}

// Function to display the results
function displayResults() {
    const mean = calculateMean();
    const median = calculateMedian();
    console.log(`Mean: ${mean}`);
    console.log(`Median: ${median}`);
}

getNumbers();