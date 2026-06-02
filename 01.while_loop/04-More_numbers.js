// Task: Numbers Divisible by 3
// Description: Print all numbers in the range from 1 to 100 that are divisible by 3.

function numDividedBy3() {
    for (let i = 3; i <= 100; i += 3) {
        console.log(i);
    }
}
numDividedBy3();

/*
Alternative solution:

function numDividedBy3() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
*/
