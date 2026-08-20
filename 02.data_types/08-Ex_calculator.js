// Task: Calculator
// Description: Perform the calculation based on the operator.

function calculator(num1, operator, num2) {
    let result = 0;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }

    console.log(result.toFixed(2));
}
calculator(5, '+', 10);
calculator(25.5, '-', 3);

/*
function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            console.log((num1 + num2).toFixed(2));
            break;
        case '-':
            console.log((num1 - num2).toFixed(2));
            break;
        case '/':
            console.log((num1 / num2).toFixed(2));
            break;
        case '*':
            console.log((num1 * num2).toFixed(2));
            break;
    }
}
*/
