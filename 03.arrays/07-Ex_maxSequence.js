// Task: Longest Sequence
// Description: Find and print the longest sequence of equal consecutive elements in an array.

function maxSequenceOfEqual(arr) {
    let bestNumber = arr[0];
    let bestLength = 1;
    let currentLength = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentLength++;
        } else {
            currentLength = 1;
        }

        if (currentLength > bestLength) {
            bestLength = currentLength;
            bestNumber = arr[i];
        }
    }

    console.log((bestNumber + ' ').repeat(bestLength).trim());
}
maxSequenceOfEqual([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqual([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqual([0, 1, 1, 5, 2, 2, 6, 3, 3]);