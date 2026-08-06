// Task: Reverse String
// Description: Receive a string, reverse it,
// and print the reversed string.

function reverseString(word) {
    word = String(word);

    let result = '';

    for (let symbol of word) {
        result = symbol + result;
    }

    console.log(result);
}
reverseString('Hello');
reverseString(1234);