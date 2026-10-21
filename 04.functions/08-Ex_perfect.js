// Task: Perfect Number
// Description: Check if a number is equal to the sum of all its positive divisors excluding itself.

function perfectNumber(num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum === num) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}
perfectNumber(6);
//  We have a perfect number! 

perfectNumber(28);
//  We have a perfect number! 

perfectNumber(1236498);
//  It's not so perfect.

/*
function perfectNum(num) {

    function createSum() {
        let sum = 0;

        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }

        return sum;
    }

    if (num === createSum()) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
*/
