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
// b c;

charactersInRange('#', ':');
// $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9;

charactersInRange('C', '#');
// $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B;

/*
function charactersInRange(char1, char2) {
    let result = [];

    let asciiChar1 = char1.charCodeAt();      // 97
    let asciiChar2 = char2.charCodeAt();      // 100

    function getRange(asciiChar1, asciiChar2) {
        let minChar = (a, b) => Math.min(a, b);    // 97
        let maxChar = (a, b) => Math.max(a, b);    // 100

        return [minChar(asciiChar1, asciiChar2),
                maxChar(asciiChar1, asciiChar2)
        ];
    }

    let rangeArr = getRange(asciiChar1, asciiChar2);   // [97, 100];

    function buildResult(rangeArr) {
        for (let i = rangeArr[0] + 1; i < rangeArr[1]; i++) {
            result.push(String.fromCharCode(i));
        }

        return result;
    }

    let output = buildResult(rangeArr);

    console.log(output.join(' '));
}
*/
