// Task: Replace Words.
// Description: Receive a text with missing words and an array of replacement words.
// Find each missing word (hole) in the text.
// Replace every hole with the word that has the same length.
// Print the completed text.

function hardWord(arr) {
    let [letter, wordsToFill] = arr;
    wordsToFill.sort((a, b) => b.length - a.length);

    for (let word of wordsToFill) {
        let underscoreTemplate = '_'.repeat(word.length);
        letter = letter.replace(underscoreTemplate, word);
    }

    console.log(letter);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);