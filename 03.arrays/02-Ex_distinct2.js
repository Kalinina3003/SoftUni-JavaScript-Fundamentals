// Task: Remove Duplicates
// Description: Receive an array of integers.
// Remove duplicate values from the array. Print the unique numbers separated by a single space.

function distinctArray(arr) {
    let uniqueArr = [];

    for (let element of arr) {
        if (!uniqueArr.includes(element)) {
            uniqueArr.push(element);
        }
    }

    console.log(uniqueArr.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);