// Task: Letters Change Numbers.
// Description: Receive a sequence of strings in the format "LetterNumberLetter", separated by one or more spaces.
// For each string:
// - If the first letter is uppercase, divide the number
//   by its alphabet position.
// - If the first letter is lowercase, multiply the number
//   by its alphabet position.
// - If the last letter is uppercase, subtract its alphabet position.
// - If the last letter is lowercase, add its alphabet position.
// Calculate the total sum of all processed numbers.
// Print the result rounded to two decimal places.

function lettersChangeNumbers(input) {
    let words = input.trim().split(/\s+/);
    let total = 0;

    for (let word of words) {
        let firstLetter = word[0];
        let lastLetter = word[word.length - 1];
        let number = Number(word.slice(1, -1));

        let firstPosition = firstLetter.toLowerCase().charCodeAt(0) - 96;
        let lastPosition = lastLetter.toLowerCase().charCodeAt(0) - 96;

        if (firstLetter === firstLetter.toUpperCase()) {
            number /= firstPosition;
        } else {
            number *= firstPosition;
        }

        if (lastLetter === lastLetter.toUpperCase()) {
            number -= lastPosition;
        } else {
            number += lastPosition;
        }

        total += number;
    }

    console.log(total.toFixed(2));
}
lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f H456z');
lettersChangeNumbers('a1A');