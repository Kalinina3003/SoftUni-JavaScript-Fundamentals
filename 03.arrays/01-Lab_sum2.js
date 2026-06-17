// Task: Sum First and Last Elements
// Description: Receive an array of number strings.
// Sum the first and last elements. Print the result.

function sumFirstAndLast(arr) {
    arr = arr.map(Number);

    let first = arr.shift();
    let last = arr.pop();

    console.log(first + last);
}
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);