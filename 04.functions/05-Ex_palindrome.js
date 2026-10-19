// Task: Palindrome Integers
// Description: Check if each number in an array reads the same forward and backward.

function palindromeIntegers(arr) {
    for (let num of arr) {
        let normal = num.toString();
        let reversed = normal.split('').reverse().join('');

        console.log(normal === reversed);
    }
}
palindromeIntegers([123, 323, 421, 121]);
// false;
// true;
// false;
// true;

palindromeIntegers([32, 2, 232, 1010]);
// false;
// true;
// true;
// false;

/*
function palindromeIntegers(arr) {
    for (let num of arr) {
        let originalNum = num;
        let reversedNum = 0;

        while (num > 0) {
            let digit = num % 10;
            reversedNum = reversedNum * 10 + digit;
            num = Math.floor(num / 10);
        }

        console.log(originalNum === reversedNum ? true : false);
    }
}
*/
