// Task: Word Tracker.
// Description: Receive an array of words.
// Count how many times each word appears.
// Sort the words by occurrence count in descending order.
// Print each word and its count.

function wordOccurrences(arr) {
    let map = new Map();

    for (let word of arr) {
        if (map.has(word)) {
            let currentCount = map.get(word);
            currentCount++;

            map.set(word, currentCount);
        } else {
            map.set(word, 1);
        }
    }

    let sorted = Array.from(map)
        .sort((firstPair, secondPair) => {
            let firstValue = firstPair[1];
            let secondValue = secondPair[1];

            return secondValue - firstValue;
        });

    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }
}
wordOccurrences(["Here",
    "is",
    "the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "sentence",
    "And",
    "finally",
    "the",
    "third",
    "sentence"]);
wordOccurrences(["dog",
    "bye",
    "city",
    "dog",
    "dad",
    "boys",
    "ginger"]);