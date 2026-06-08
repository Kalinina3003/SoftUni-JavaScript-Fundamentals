// Task: Add and Subtract
// Description: Modify each number based on its parity and index,
// then print the modified array and the sums of both arrays.

function addAndSubtract(arr) {
    let originalSum = 0;
    let modifiedSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);

        originalSum += num;
        
        if (num % 2 === 0) {
            num += i;
        } else {
            num -= i;
        }

        arr[i] = num;
        modifiedSum += num;
    }
    console.log(arr);
    console.log(originalSum);
    console.log(modifiedSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);