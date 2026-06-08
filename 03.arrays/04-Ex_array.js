// Task: Array Rotation
// Description: Rotate the array to the left a given number of times
// by moving the first element to the end.

function arrayRoration(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstElement = arr.shift();
        arr.push(firstElement);
    }
    console.log(arr.join(' '));
    
}
arrayRoration([51, 47, 32, 61, 21], 2);
arrayRoration([32, 21, 61, 1], 4);
arrayRoration([2, 4, 15, 31], 5);