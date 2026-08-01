// Task: String Manipulator.
// Description: Execute commands over a string until the "Done" command.
// Depending on the command:
// - Replace characters.
// - Check if the string contains or ends with a substring.
// - Convert the whole string to uppercase.
// - Find the index of the first occurrence of a character.
// - Keep only a specified part of the string.
// Print the result after every command.

function stringGame(arr) {
    let text = arr.shift();

    while (arr[0] !== 'Done') {
        let tokens = arr.shift().split(' ');
        let command = tokens[0];

        switch (command) {
            case 'Change':
                let char = tokens[1];
                let replacement = tokens[2];

                text = text.split(char).join(replacement);
                console.log(text);
                break;

            case 'Includes':
                if (text.includes(tokens[1])) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;

            case 'End':
                if (text.endsWith(tokens[1])) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;

            case 'Uppercase':
                text = text.toUpperCase();
                console.log(text);
                break;

            case 'FindIndex':
                console.log(text.indexOf(tokens[1]));
                break;

            case 'Cut':
                let startIndex = Number(tokens[1]);
                let count = Number(tokens[2]);

                text = text.substring(startIndex, startIndex + count);
                console.log(text);
                break;
        }
    }
}
stringGame(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"]);
stringGame(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"]);
