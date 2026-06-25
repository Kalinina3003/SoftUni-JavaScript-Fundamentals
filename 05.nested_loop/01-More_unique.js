// Task: Unique PIN Codes.
// Description:
// Generate all valid 3-digit PIN codes within given ranges.
// First and third digits must be even.
// Second digit must be a prime number in the range [2...7].
// Print all valid PIN codes.

function uniquePinCodes(firstNum, secondNum, thirdNum) {
    for (let first = 2; first <= firstNum; first++) {
        if (first % 2 !== 0) {
            continue;
        }

        for (let second = 2; second <= secondNum; second++) {
            if (second !== 2 &&
                second !== 3 &&
                second !== 5 &&
                second !== 7) {
                continue;
            }

            for (let third = 2; third <= thirdNum; third++) {
                if (third % 2 === 0) {
                    console.log(`${first} ${second} ${third}`);
                }
            }
        }
    }
}
uniquePinCodes(3, 5, 5);
uniquePinCodes(8, 2, 8);