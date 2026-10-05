// Task: ASCII Sumator.
// Description: Receive two characters and a random string.
// Find all characters in the string between the two given characters.
// Calculate and print the sum of their ASCII codes.

function asciiSumator(arr) {
    let firstChar = arr[0].charCodeAt(0);
    let secondChar = arr[1].charCodeAt(0);
    let text = arr[2];

    let start = Math.min(firstChar, secondChar);
    let end = Math.max(firstChar, secondChar);

    let sum = 0;

    for (let char of text) {
        let code = char.charCodeAt(0);

        if (code > start && code < end) {
            sum += code;
        }
    }

    console.log(sum);
}
asciiSumator(['.',
    '@',
    'dsg12gr5653feee5']
);
// 363;

asciiSumator(['?',
    'E',
    '@ABCEF']
);
// 262;

asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']
);
// 445;