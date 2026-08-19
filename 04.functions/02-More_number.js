// Task: Number Modification.
// Description: Receive a number and calculate the average value of its digits.
// While the average is not higher than 5, append 9 to the end of the number.
// Print the final number when its digit average becomes higher than 5.

function numberModification(number) {
    let digits = String(number);

    while (true) {
        let sum = 0;

        for (let digit of digits) {
            sum += Number(digit);
        }

        let average = sum / digits.length;

        if (average > 5) {
            break;
        }

        digits += '9';
    }

    console.log(digits);
}
numberModification(101);
numberModification(5835);