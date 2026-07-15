// Task: Replace Words.
// Description: Receive a list of words and a text with '*' templates.
// Match each template with a word of the same length.
// Replace the templates with the corresponding words.
// Print the completed text.

function revealWords(wordsToFillStr, text) {
    let wordsToFill = wordsToFillStr.split(', ');

    for (let word of wordsToFill) {
        let starTemplate = '*'.repeat(word.length);
        text = text.replace(starTemplate, word);
    }

    console.log(text);
}
revealWords('great',
    'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');