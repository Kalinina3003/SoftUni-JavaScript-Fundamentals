// Task: Calculator
// Description: Perform a calculation with two numbers based on the given operator.

function simpleCalculator(numOne, numTwo, operator) {
    let operation;

    switch (operator) {
        case 'multiply':
            operation = (x, y) => x * y;
            break;
        case 'divide':
            operation = (x, y) => x / y;
            break;
        case 'add':
            operation = (x, y) => x + y;
            break;
        case 'subtract':
            operation = (x, y) => x - y;
            break;
    }
    return operation(numOne, numTwo);
}
console.log(simpleCalculator(5, 5, 'multiply'));
// 25;

console.log(simpleCalculator(40, 8, 'divide'));
// 5;

console.log(simpleCalculator(50, 13, 'subtract'));
// 37;

/*
function solve(num1, num2, operator) {
    let result;

    if (operator === 'multiply') {
        result = (a, b) => a * b;
    } else if (operator === 'divide') {
        result = (a, b) => a / b;
    } else if (operator === 'add') {
        result = (a, b) => a + b;
    } else if (operator === 'subtract') {
        result = (a, b) => a - b;
    }

    console.log(result(num1, num2));
}
*/
