// Task: Value of a String.
// Description: Receive a string and a case type (UPPERCASE or LOWERCASE).
// Sum the ASCII codes of all English letters matching the specified case.
// Ignore all other characters.
// Print the total sum.

function valueOfString(arr) {
    let text = arr[0];
    let type = arr[1];
    let sum = 0;

    for (let char of text) {
        if (type === 'LOWERCASE' && char >= 'a' && char <= 'z') {
            sum += char.charCodeAt(0);
        } else if (type === 'UPPERCASE' && char >= 'A' && char <= 'Z') {
            sum += char.charCodeAt(0);
        }
    }

    console.log(`The total sum is: ${sum}`);
}
valueOfString(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']
);
// The total sum is: 1539;

valueOfString(['AC/DC',
    'UPPERCASE']
);
// The total sum is: 267;