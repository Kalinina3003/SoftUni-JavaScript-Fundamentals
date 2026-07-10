// Task: Odd Occurrences.
// Description: Receive a sentence as a string.
// Count the occurrences of each word (case-insensitive).
// Extract the words that appear an odd number of times.
// Print the matching words in their order of appearance.

function oddOccurrences(str) {
    let wordOccurrences = new Map();
    let words = str.split(' ').map(word => word.toLowerCase());

    for (let word of words) {
        if (wordOccurrences.has(word)) {
            let currentOccurrences = wordOccurrences.get(word);
            wordOccurrences.set(word, currentOccurrences + 1);
        } else {
            wordOccurrences.set(word, 1);
        }
    }

    let entries = Array.from(wordOccurrences.entries())
        .filter(entry => entry[1] % 2 !== 0)
        .map(entry => entry[0]);
    console.log(entries.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');