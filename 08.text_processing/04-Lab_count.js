// Task: Count Word Occurrences.
// Description: Receive a text and a target word.
// Split the text into individual words.
// Count how many times the target word appears.
// Print the total number of occurrences.

function countStringOccurrences(text, searchWord) {
    text = text.replaceAll(',', ' ');
    text = text.replaceAll('.', ' ');
    text = text.replaceAll('!', ' ');
    text = text.replaceAll('?', ' ');
    text = text.replaceAll(':', ' ');
    text = text.replaceAll(';', ' ');

    let allWords = text.split(' ');

    let count = 0;

    for (let word of allWords) {
        if (word === searchWord) {
            count++;
        }
    }

    console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence',
    'is'
);
countStringOccurrences('softuni is great place for learning new programming languages',
    'softuni'
);