// Task: Prime Pairs.
// Description: Generate all four-digit numbers from two two-digit ranges.
// The first pair starts from firstStart and ends at firstStart + diff1.
// The second pair starts from secondStart and ends at secondStart + diff2.
// Print only the numbers where both two-digit parts are prime numbers.

function primePairs(firstStart, secondStart, diff1, diff2) {
    for (let first = firstStart; first <= firstStart + diff1; first++) {
        let firstPrime = true;

        if (first < 2) {
            firstPrime = false;
        }

        for (let i = 2; i <= Math.sqrt(first); i++) {
            if (first % i === 0) {
                firstPrime = false;
                break;
            }
        }

        for (let second = secondStart; second <= secondStart + diff2; second++) {
            let secondPrime = true;

            if (second < 2) {
                secondPrime = false;
            }

            for (let j = 2; j <= Math.sqrt(second); j++) {
                if (second % j === 0) {
                    secondPrime = false;
                    break;
                }
            }

            if (firstPrime && secondPrime) {
                console.log(`${first}${second}`);
            }
        }
    }
}
primePairs(10, 20, 5, 5);
primePairs(10, 30, 9, 6);