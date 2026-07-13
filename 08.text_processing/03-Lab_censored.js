// Task: Censored Words.
// Description: Receive a text and a target word.
// Find all occurrences of the target word.
// Replace each occurrence with '*' repeated to match the word's length.
// Print the modified text.

function censoredWords(sentence, word) {
    let replacementLength = word.length;
    let replacement = '*'.repeat(replacementLength);
    let result = sentence.replaceAll(word, replacement);

    console.log(result);
}
censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');