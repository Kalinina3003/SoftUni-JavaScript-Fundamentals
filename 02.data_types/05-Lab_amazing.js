// Task: Amazing Numbers
// Description: Check whether the sum of a number's digits contains the digit 9.

function amazingNumbers(num) {
    num = String(num);
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    let result = String(sum);

    if (result.includes('9')) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
amazingNumbers(1233);
amazingNumbers(999);