// Task: Characters in Range
// Description: Print all ASCII characters
// between the two given characters, excluding the start and end characters.

function charactersInRange(char1, char2) {
    let charsInBetween = [];
    let ascii1 = char1.charCodeAt();
    let ascii2 = char2.charCodeAt();

    let minAscii = Math.min(ascii1, ascii2);
    let maxAscii = Math.max(ascii1, ascii2);

    for (let ascii = minAscii + 1; ascii < maxAscii; ascii++) {
        let currentChar = String.fromCharCode(ascii);
        charsInBetween.push(currentChar);
    }

    console.log(charsInBetween.join(' '));
}
charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');