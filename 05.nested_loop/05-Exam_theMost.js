// Task: The Most Powerful Word.
// Description: Read words until "End of words".
// For each word, calculate the sum of the ASCII codes of its characters.
// If the word starts with a vowel, multiply the sum by the length of the word.
// Otherwise divide the sum by the length and round the result down.
// Print the word with the greatest power.

function theMostPowerfulWord(input) {
    let index = 0;

    let winner = '';
    let winnerPower = Number.MIN_SAFE_INTEGER;

    while (input[index] !== 'End of words') {
        let word = input[index++];
        let power = 0;

        for (let letter of word) {
            power += letter.charCodeAt(0);
        }

        let vowels = 'aeiouyAEIOUY';

        if (vowels.includes(word[0])) {
            power *= word.length;
        } else {
            power = Math.floor(power / word.length);
        }

        if (power > winnerPower) {
            winnerPower = power;
            winner = word;
        }
    }

    console.log(`The most powerful word is ${winner} - ${winnerPower}`);
}
theMostPowerfulWord(["The",
    "Most",
    "Powerful",
    "Word",
    "Is",
    "Experience",
    "End of words"]);
theMostPowerfulWord(["But",
    "Some",
    "People",
    "Say",
    "It's",
    "LOVE",
    "End of words"]);