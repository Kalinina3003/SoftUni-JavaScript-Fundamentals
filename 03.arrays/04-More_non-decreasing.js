// Task: Extract Non-Decreasing Numbers
// Description: Extract numbers that are greater than or equal to 
// the current biggest number.

function nonDecreasingSubset(arr) {
    let result = [];
    let biggest = arr[0];

    for (let number of arr) {
        if (number >= biggest) {
            result.push(number);
            biggest = number;
        }
    }

    console.log(result.join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);

/*
function nonDecreasingSubset(arr) {
    let biggest = arr[0];

    let result = arr.filter(number => {
        if (number >= biggest) {
            biggest = number;
            return true;
        }

        return false;
    });

    console.log(result.join(' '));
}
*/
