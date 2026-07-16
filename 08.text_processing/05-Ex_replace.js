// Task: Replace Repeating Chars.
// Description: Receive a string.
// Replace each sequence of consecutive identical letters with a single letter.
// Print the resulting string.

function replaceRepeatingChars(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i - 1]) {
            result += str[i];
        }
    }

    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');