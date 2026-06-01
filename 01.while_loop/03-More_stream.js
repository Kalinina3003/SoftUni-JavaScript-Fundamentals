// Task: Stream Of Letters
// Description: read characters until "End".
// The first occurrence of the letters 'c', 'o', and 'n' is used as a secret command.
// After all three letters are found, print the current word and start a new one.

function streamOfLetters(input) {
    let index = 0;

    let word = '';
    let result = '';

    let firstC = '';
    let firstO = '';
    let firstN = '';

    while (index < input.length) {
        let letter = input[index++];

        if (letter === 'End') {
            break;
        }

        let isLetter = (letter >= 'A' && letter <= 'Z') ||
            (letter >= 'a' && letter <= 'z');

        if (isLetter === false) {
            continue;
        }

        if (letter === 'c' && firstC !== 'c') {
            firstC = 'c';
        } else if (letter === 'o' && firstO !== 'o') {
            firstO = 'o';
        } else if (letter === 'n' && firstN !== 'n') {
            firstN = 'n';
        } else {
            word += letter;
        }

        if (firstC === 'c' && firstO === 'o' && firstN === 'n') {
            result += word + ' ';

            word = '';
            firstC = '';
            firstO = '';
            firstN = '';
        }
    }
    console.log(result);

}
streamOfLetters(["H",
    "n",
    "e",
    "l",
    "l",
    "o",
    "o",
    "c",
    "t",
    "c",
    "h",
    "o",
    "e",
    "r",
    "e",
    "n",
    "e",
    "End"]);
