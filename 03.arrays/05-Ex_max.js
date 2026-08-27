// Task: Top Integers
// Description: Find all numbers that are greater than every element to their right.

function maxNumber(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let isMaxNum = true;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] >= currentNum) {
                isMaxNum = false;
                break;
            }
        }
        if (isMaxNum) {
            result.push(currentNum);
        }
    }
    console.log(result.join(' '));

}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);

/*
function maxNumber(arr) {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let right = arr.slice(i + 1);

        let maxRight = Math.max(...right);

        if (num > maxRight) {
            result += `${num} `;
        }
    }

    console.log(result);
}
*/
