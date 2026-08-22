// Task: Binary to Decimal
// Description: Convert an 8-bit binary number from a string to a decimal number.

function binaryToDecimal(binary) {
    let decimal = parseInt(binary, 2);

    console.log(decimal);
}
binaryToDecimal('00001001');
binaryToDecimal('11110000');

/*
function binaryToDecimal(strNum) {
    let result = 0;

    for (let i = 0; i < strNum.length; i++) {
        let num = Number(strNum[i]);

        result += num * 2 ** (strNum.length - 1 - i);
    }

    console.log(result);
}
*/
