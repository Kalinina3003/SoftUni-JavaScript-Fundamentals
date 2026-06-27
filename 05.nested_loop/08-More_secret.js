// Task: Secret Door Lock.
// Description: Generate all possible three-digit lock combinations.
// Hundreds and units digits must be even.
// Tens digit must be a prime number between 2 and 7.
// Each digit cannot exceed its given upper limit.
// Print every valid combination.

function secretDoorsLock(hundredsLimit, tensLimit, unitsLimit) { 
    for (let hundreds = 2; hundreds <= hundredsLimit; hundreds += 2) {
        for (let tens = 2; tens <= tensLimit; tens++) {
            for (let units = 2; units <= unitsLimit; units += 2) {

                if (tens === 2 || tens === 3 || tens === 5 || tens === 7) {
                    console.log(`${hundreds} ${tens} ${units}`);
                }
            }
        }
    }
}
secretDoorsLock(3, 5, 5);
secretDoorsLock(8, 2, 8);