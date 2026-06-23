// Task: Equal Sums Even Odd Position.
// Description: Receive two six-digit integers.
// Find all numbers in the given range (inclusive).
// For each number, calculate the sum of digits in odd positions
// and the sum of digits in even positions.
// Print all numbers where the two sums are equal.
// Print the valid numbers on a single line separated by spaces.

function equalSumsEvenOddPosition(start, end) {
    let result = '';

    for (let i = start; i <= end; i++) {
        let current = String(i);

        let sumOdd = 0;
        let sumEven = 0;

        for (let j = 0; j < current.length; j++) {
            let num = Number(current[j]);

            if (j % 2 === 0) {
                sumOdd += num;
            } else {
                sumEven += num;
            }
        }

        if (sumOdd === sumEven) {
            result += i + ' ';
        }
    }

    console.log(result);
}
equalSumsEvenOddPosition(100000, 100050);
equalSumsEvenOddPosition(123456, 124000);
equalSumsEvenOddPosition(100115, 100120);