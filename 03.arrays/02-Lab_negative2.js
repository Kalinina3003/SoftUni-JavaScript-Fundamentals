// Task: Negative or Positive Numbers
// Description: Receive an array of number strings.
// Add negative numbers to the beginning of a new array. Add positive numbers and 0 to the end.
// Print each element on a new line.

function negativeOrPositiveNumbers(arr) {
    arr = arr.map(Number);

    let result = [];

    for (let number of arr) {
        if (number < 0) {
            result.unshift(number);
        } else {
            result.push(number);
        }
    }

    for (let number of result) {
        console.log(number);
    }
}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);