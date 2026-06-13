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
oddAndEvenSum(3495892137259234);