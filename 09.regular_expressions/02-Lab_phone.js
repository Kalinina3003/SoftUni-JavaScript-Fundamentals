// Task: Match Phone Number.
// Description: Receive a string containing multiple phone numbers.
// Use a regular expression to match all valid Sofia phone numbers in the required format.
// Print all matched phone numbers separated by a comma and a space.

function matchPhoneNumber(input) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let matches = input[0].matchAll(pattern);
    let output = [];

    for (let match of matches) {
        output.push(match[0]);
    }

    console.log(output.join(', '));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);