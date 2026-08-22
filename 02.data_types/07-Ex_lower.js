// Task: Check Character Case
// Description: Receive a character and print whether it is uppercase or lowercase.

function lowerOrUpper(letter) {
    if (letter === letter.toUpperCase()) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}
lowerOrUpper('L');
lowerOrUpper('f');

/*
function solve(letter) {
    console.log(letter === letter.toLowerCase() ? 'lower-case' : 'upper-case');
}
*/
