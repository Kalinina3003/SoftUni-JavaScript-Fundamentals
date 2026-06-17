// Task: Last K Numbers Sequence
// Description: Generate a sequence of n elements.
// The first element is 1. Each next element is the sum of the previous k elements.

function lastKNumbersSequance(n, k) {
    let result = [1];

     for (let i = 1; i < n; i++) {
        let startIndex = i - k;

        if (startIndex < 0) {
            startIndex = 0;
        }

        let previousThreeNumbers = result.slice(startIndex, i);
        let sum = 0;

        for (let number of previousThreeNumbers) {
            sum += number;
        }

        result[i] = sum;
     }

     console.log(result.join(' '));
}
lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);