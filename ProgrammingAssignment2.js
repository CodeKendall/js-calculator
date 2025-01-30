const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

const askInput = () => {
    rl.question('Enter an integer or "d" to quit: ', input => {
        if (input.toLowerCase() === 'd') {
            rl.close();
            echoNumbers();
            checkProductCondition();
        } else if (isValidNumber(input)) {
            numbers.push(parseInt(input));
            askInput();
        } else {
            console.log("Error: Please enter a valid integer or 'd' to quit.");
            askInput();
        }
    });
};

const isValidNumber = input => {
    return !isNaN(input) && Number.isInteger(parseFloat(input));
};

const echoNumbers = () => {
    console.log("Integers entered:", numbers.join(', '));
};

const checkProductCondition = () => {
    let found = false;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            for (let k = 0; k < numbers.length; k++) {
                if (i !== k && j !== k && numbers[i] * numbers[j] === numbers[k]) {
                    console.log(`Condition is met: ${numbers[i]} x ${numbers[j]} = ${numbers[k]}`);
                    found = true;
                }
            }
        }
    }
    if (!found) {
        console.log('Condition was not met.');
    }
};

askInput();