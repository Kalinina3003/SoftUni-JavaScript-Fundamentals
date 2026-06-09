// Task: Equal Sums
// Description: Find an index where the sum of elements on the left is equal to the sum of elements on the right.

function equalSums(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let left = 0; left < i; left++) {
            leftSum += arr[left];
        }

        for (let right = i + 1; right < arr.length; right++) {
            rightSum += arr[right];
        }

        if (leftSum === rightSum) {
            console.log(i);
            return;
        }
    }
    console.log('no');

}
equalSums([1, 2, 3, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
equalSums([1, 2, 3]);