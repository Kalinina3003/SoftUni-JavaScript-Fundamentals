// Task: Even and Odd Subtraction
// Description: Find the sum of all even digits and the sum of all odd digits in a number.

function oddAndEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;

    let numAsString = String(num);

    for (let i of numAsString) {
        let digit = Number(i);

        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
// Odd sum = 9, Even sum = 4;

oddAndEvenSum(3495892137259234);
//  Odd sum = 54, Even sum = 22;

/*
function oddAndEvenSum(num) {
    let numStr = String(num);     // '1000435';

    function getSums(numStr) {
        let oddSum = 0;
        let evenSum = 0;

        for (let integer of numStr) {
            integer = Number(integer);

            if (integer % 2 === 0) {
                evenSum += integer;
            } else {
                oddSum += integer;
            }
        }

        return [evenSum, oddSum];  // [4, 9];
    }

    let [evenResult, oddResult] = getSums(numStr);

    return `Odd sum = ${oddResult}, Even sum = ${evenResult}`;
}
*/
