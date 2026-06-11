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
console.log(simpleCalculator(40, 8, 'divide'));
console.log(simpleCalculator(50, 13, 'subtract'));