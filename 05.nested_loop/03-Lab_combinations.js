// Task: Sum of Three Numbers.
// Description: Receive an integer n.
// Generate all possible combinations of three non-negative integers (x1, x2, and x3).
// Count how many combinations satisfy the equation: x1 + x2 + x3 = n.
// Print the total number of valid combinations.

function combinations(n) {
    let count = 0;

    for (let x1 = 0; x1 <= n; x1++) {
        for (let x2 = 0; x2 <= n; x2++) {
            for (let x3 = 0; x3 <= n; x3++) {

                if (x1 + x2 + x3 === n) {
                    count++;
                }
            }
        }
    }
    
    console.log(count);
}
combinations(25);