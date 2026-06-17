// Task: First and Last K Numbers
// Description: The first element is k.
// Print the first k elements of the array. Print the last k elements of the array.

function firstAndLastKNumbers(arr) {
    let k = arr[0];

    let firstNumbers = arr.slice(1, k + 1);
    let lastNumbers = arr.slice(arr.length - k);

    console.log(firstNumbers.join(' '));
    console.log(lastNumbers.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);