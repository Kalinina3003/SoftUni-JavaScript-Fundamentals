// Task: Replace Character
// Description: Replace the missing character in a word and check if it matches another string.

function rightPlace(string, char, checkWord) {
    let result = string.replace('_', char);

    if (result === checkWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');