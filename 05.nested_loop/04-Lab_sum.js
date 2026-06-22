// Task: Sum of Two Numbers.
// Description: Receive a start number, an end number, and a magic number.
// Generate all possible pairs of numbers within the given range.
// Count each generated combination.
// Find the first pair whose sum is equal to the magic number.
// Print the combination number and the pair if found.
// Otherwise, print the total number of checked combinations.

function sumOfTwoNumbers(start, end, magicalNum) {
    let count = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {

            count++;

            if (i + j === magicalNum) {
                console.log(`Combination N:${count} (${i} + ${j} = ${magicalNum})`);
                return;
            }
        }
    }

    console.log(`${count} combinations - neither equals ${magicalNum}`);
}
sumOfTwoNumbers(1, 10, 5);
sumOfTwoNumbers(88, 888, 1000);
sumOfTwoNumbers(23, 24, 20);