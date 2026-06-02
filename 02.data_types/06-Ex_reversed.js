// Task: Reverse a String
// Description: Receive a string as a parameter,
// reverse its characters, and print the reversed string.

function reversedString(str) {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];
        result += char;
    }
    console.log(result);
}
reversedString('Information');
reversedString('star');
reversedString('racecar');