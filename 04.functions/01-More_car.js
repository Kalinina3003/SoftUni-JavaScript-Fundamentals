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
// The car is 39.00% clean.;

carwash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
// The car is 13.12% clean.;

/*
function carWash(arr) {
    let isCleaned = 0;

    function cleanCalculation(cleanliness, command) {
        switch (command) {
            case 'soap':
                cleanliness += 10;
                break;
            case 'water':
                cleanliness *= 1.20;
                break;
            case 'vacuum cleaner':
                cleanliness *= 1.25;
                break;
            case 'mud':
                cleanliness *= 0.90;
                break;
        }

        return cleanliness;
    }

    for (let command of arr) {
        isCleaned = cleanCalculation(isCleaned, command);
    }

    console.log(`The car is ${isCleaned.toFixed(2)}% clean.`);
}
*/
