// Task: Extract Substring.
// Description: Receive a string, a starting index, and a count.
// Extract a substring starting from the given index.
// Print the extracted substring.

function substring(text, startIndex, count) {
    let result = text.substring(startIndex, startIndex + count);

    console.log(result);
}
substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);