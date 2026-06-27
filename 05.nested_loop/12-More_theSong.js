// Task: The Song of the Wheels.
// Description: Generate all four-digit combinations.
// Digits are from 1 to 9.
// The control value must equal a * b + c * d.
// The first digit must be less than the second.
// The third digit must be greater than the fourth.
// Print every valid combination and the fourth one as the password.
// If there is no fourth combination, print "No!".

function theSongOfTheWheels(controlValue) {
    let count = 0;
    let password = '';
    let result = '';

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {

                    if (
                        a < b &&
                        c > d &&
                        a * b + c * d === controlValue
                    ) {
                        result += `${a}${b}${c}${d} `;
                        count++;

                        if (count === 4) {
                            password = `${a}${b}${c}${d}`;
                        }
                    }
                }
            }
        }
    }

    console.log(result);

    if (password !== '') {
        console.log(`Password: ${password}`);
    } else {
        console.log('No!');
    }
}
theSongOfTheWheels(11);
theSongOfTheWheels(139);
theSongOfTheWheels(110);