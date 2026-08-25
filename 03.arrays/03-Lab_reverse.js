// Task: Reverse an Array of Numbers
// Description: Create a new array with the first n elements
// from the original array, reverse it, and print the elements on a single line separated by spaces.

function reverseAnArrayOfNumbers(num, inputArr) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(inputArr[i]);
    }

    let output = '';

    for (let i = arr.length - 1; i >= 0; i--) {
        output += arr[i] + ' ';
    }

    console.log(output);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);

/*
function reverseInPlace(n, arr) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }

    let data = newArr.reverse();

    console.log(data.join(' '));
}
*/
