// Task: Sum Digits
// Description: Find and print the sum of all digits in a given number.

function sumDigits(num) {
    let numAsString = String(num);
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let currentNum = Number(numAsString[i]);
        sum += currentNum;
    }
    console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);

/*
function sumDigits(number) {
    let sum = 0;
    let digit = number;

    while (digit > 0) {
        sum += digit % 10;
        digit = parseInt(digit / 10);
    }

    console.log(sum);
}
*/
