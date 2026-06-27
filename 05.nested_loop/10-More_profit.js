// Task: Profit.
// Description: Generate all possible payment combinations.
// Use the available 1 lv. coins, 2 lv. coins, and 5 lv. banknotes.
// The count of each denomination cannot exceed the given limit.
// Print every combination that equals the target sum.

function profit(oneLv, twoLv, fiveLv, targetSum) {
    for (let one = 0; one <= oneLv; one++) {
        for (let two = 0; two <= twoLv; two++) {
            for (five = 0; five <= fiveLv; five++) {

                let sum = one + two * 2 + five * 5;

                if (sum !== targetSum) {
                    continue;
                }

                console.log(`${one} * 1 lv. + ${two} * 2 lv. + ${five} * 5 lv. = ${targetSum} lv.`);
            }
        }
    }
}
profit(3, 2, 3, 10);
profit(5, 3, 1, 7);