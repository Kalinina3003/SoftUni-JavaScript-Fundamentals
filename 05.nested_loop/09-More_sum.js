// Task: Sum of Two Numbers.
// Description: Check all pairs of numbers in the given range.
// Count every generated combination.
// Find the first pair whose sum equals the magic number.
// Print the combination number and the pair.
// If no match is found, print the total number of combinations.

function sumOfTwoNumbers(start, end, magicNumber) {
    let count = 0;
    let isFound = false;

    for (let first = start; first <= end; first++) {
        if (isFound) {
            break;
        }

        for (let second = start; second <= end; second++) {
            count++;

            if (first + second === magicNumber) {
                console.log(`Combination N:${count} (${first} + ${second} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
    }

    if (!isFound) {
        console.log(`${count} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(1, 10, 5);
sumOfTwoNumbers(88, 888, 1000);