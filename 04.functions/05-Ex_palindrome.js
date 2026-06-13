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
palindromeIntegers([32, 2, 232, 1010]);