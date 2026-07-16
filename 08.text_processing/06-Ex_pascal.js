// Task: Pascal-Case Splitter.
// Description: Receive a PascalCase string.
// Split the string into separate words.
// Print the words joined by comma and space.

function pascalCaseSplitter(str) {
    let words = [];
    let currentWord = '';

    for (let char of str) {
        if (char >= 'A' && char <= 'Z' && currentWord !== '') {
            words.push(currentWord);
            currentWord = '';
        }
        currentWord += char;
    }

    words.push(currentWord);

    console.log(words.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');