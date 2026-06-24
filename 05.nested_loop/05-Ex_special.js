// Task: Special Numbers.
// Description: Receive an integer N.
// Generate all four-digit numbers from 1111 to 9999.
// A number is special if N is divisible by each of its digits.
// Digits cannot be 0 because division by zero is not allowed.
// Print all special numbers separated by a space.

function specialNumbers(n) {
    let result = '';

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {

                    if (
                        n % a === 0 &&
                        n % b === 0 &&
                        n % c === 0 &&
                        n % d === 0
                    ) {
                        result += `${a}${b}${c}${d} `;
                    }
                }
            }
        }
    }

    console.log(result);
}
specialNumbers(3);
specialNumbers(11);