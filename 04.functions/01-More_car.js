// Task: Car Wash.
// Description: Receive an array of commands. Start with 0% clean.
// "soap" adds 10%, "water" increases the value by 20%,
// "vacuum cleaner" increases it by 25%, and "mud" decreases it by 10%.
// Print the final value rounded to 2 decimal places.

function carwash(arr) {
    let clean = 0;

    for (let command of arr) {
        if (command === 'soap') {
            clean += 10;
        } else if (command === 'water') {
            clean *= 1.20;
        } else if (command === 'vacuum cleaner') {
            clean *= 1.25;
        } else if (command === 'mud') {
            clean *= 0.90;
        }
    }

    console.log(`The car is ${clean.toFixed(2)}% clean.`);
}
carwash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carwash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);