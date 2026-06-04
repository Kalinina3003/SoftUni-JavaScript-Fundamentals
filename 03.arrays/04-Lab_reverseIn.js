// Task: Reverse an Array of Strings
// Description: Reverse the elements of an array of strings without creating a new array
// and print the result on a single line separated by spaces.

function reverseInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        swapElements(arr, i, arr.length - 1 - i);
    }

    console.log(arr.join(' '));

    function swapElements(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);