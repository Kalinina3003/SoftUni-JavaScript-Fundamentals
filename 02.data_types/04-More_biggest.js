// Task: Biggest of Three Numbers
// Description: Find and print the biggest of three numbers.

function biggestOfThreeNumbers(num1, num2, num3) {
    let biggest = Math.max(num1, num2, num3);

    console.log(biggest);
}
biggestOfThreeNumbers(-2, 7, 3);
biggestOfThreeNumbers(130, 5, 99);
biggestOfThreeNumbers(43, 43.2, 43.1);
biggestOfThreeNumbers(2, 2, 2);

/*
function biggestOf3Numbers(num1, num2, num3) {
    let biggest = Number.MIN_SAFE_INTEGER;

    if (num1 > biggest) {
        biggest = num1;
    }

    if (num2 > biggest) {             
        biggest = num2;
    }

    if (num3 > biggest) {
        biggest = num3;
    }

    console.log(biggest);
}
*/
