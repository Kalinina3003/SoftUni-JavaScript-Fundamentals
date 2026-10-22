// Task: Factorial Division.
// Description: Receive two integers. Calculate the factorial of each number.
// Divide the first factorial by the second. Print the result with 2 decimal places.

function factorialDivision(num1, num2) {
    let factorial1 = 1;
    let factorial2 = 1;

    for (let i = 1; i <= num1; i++) {
        factorial1 *= i;
    }

    for (let i = 1; i <= num2; i++) {
        factorial2 *= i;
    }

    let result = factorial1 / factorial2;
    console.log(result.toFixed(2));
}
factorialDivision(5, 2);
// 60.00;

factorialDivision(6, 2);
// 360.00;

/*
function factorialDivision(firstNum, secondNum) {

    function factorial(num) {
        let result = 1;

        for (let i = 1; i <= num; i++) {
            result *= i;
        }

        return result;
    }

    let result = factorial(firstNum) / factorial(secondNum);

    console.log(result.toFixed(2));
}
*/
