// Task: Find Word.
// Description: Receive a target word and a text.
// Check if the text contains the given word (case-insensitive).
// If found, print the word and stop searching.
// Otherwise, print "{word} not found!".

function stringSubstring(searchedWord, text) {
    text = text.toLowerCase();
    let textWords = text.split(' ');

    if (textWords.includes(searchedWord)) {
        console.log(searchedWord);
    } else {
        console.log(`${searchedWord} not found!`);
    }
}
stringSubstring('javascript',
    'JavaScript is the best programming language');
stringSubstring('python',
    'JavaScript is the best programming language');