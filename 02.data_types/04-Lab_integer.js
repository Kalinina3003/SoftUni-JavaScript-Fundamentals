// Task: Sum Numbers
// Description: Calculate the sum of three numbers and determine whether the result is Integer or Float.

function integerAndFloat(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;

    if (sum % 1 === 0) {
        console.log(`${sum} - ${'Integer'}`);
    } else {
        console.log(`${sum} - ${'Float'}`);
    }
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);

/*
function solve(num1, num2, num3) {
    let sum = num1 + num2 + num3;

    let isInteger = Number.isInteger(sum);

    let output = isInteger ? sum + ' - Integer' : sum + ' - Float';
    
    console.log(output);
}
*/
