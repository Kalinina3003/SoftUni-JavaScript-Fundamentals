// Task: ASCII Values of Reversed Characters
// Description: Print three characters in reverse order and then print their ASCII values.

function asciiValuesOfReversedCharacters(char1, char2, char3) {
    console.log(`${char3}${char2}${char1}`);

    console.log(`${char3.charCodeAt(0)} ${char2.charCodeAt(0)} ${char1.charCodeAt(0)}`);
}
asciiValuesOfReversedCharacters('a', 'b', 'c');
asciiValuesOfReversedCharacters('%', '2', 'o');
asciiValuesOfReversedCharacters('1', '5', 'p');