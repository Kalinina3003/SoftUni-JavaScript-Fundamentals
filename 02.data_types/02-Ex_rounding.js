// Task: Rounding Numbers.
// Description: Round a number to the given decimal precision, with a maximum precision of 15.
// Print the rounded number without insignificant trailing zeroes.

function rounding(num, precision) {
    if (precision > 15) {
        precision = 15;
    }

    num = num.toFixed(precision)
    let result = parseFloat(num);

    console.log(result);
}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);