// Task: Add and Subtract.
// Description: Calculate the sum of the first two numbers,
// then subtract the third number from the calculated sum.

function addAndSubtract(num1, num2, num3) {
    let sum = (a, b) => a + b;
    let subtract = (c, d) => c - d;

    let tempResult = sum(num1, num2);
    let finalResult = subtract(tempResult, num3);
    console.log(finalResult);
    
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);