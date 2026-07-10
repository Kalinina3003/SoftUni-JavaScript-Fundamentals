// Task: Word Occurrences.
// Description: Receive an array of words.
// The first element contains the target words.
// Count the occurrences of each target word in the remaining elements.
// Sort the results by count in descending order.
// Print each word with its occurrence count.

function wordTracker(arr) {
    let targetWords = arr.shift().split(' ');
    let enteringWords = {};

    for (let targetWord of targetWords) {
        enteringWords[targetWord] = 0;
    }

    for (let word of arr) {
        if (word in enteringWords) {
            enteringWords[word]++;
        }
    }

    let entries = Object.entries(enteringWords).sort((a, b) => b[1] - a[1]);
    
    for (let [textWord, occurrences] of entries) {
        console.log(`${textWord} - ${occurrences}`);
    }
}
wordTracker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
wordTracker(['is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);