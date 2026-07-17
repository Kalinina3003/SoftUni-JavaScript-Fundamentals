// Task: Match Full Names.
// Description: Receive a string containing multiple names.
// Use a regular expression to find all valid full names.
// Print all matched full names separated by a space.

function matchFullName(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let matches = input.matchAll(pattern);

    let output = [];

    for (let match of matches) {
        output.push(match[0]);
    }

    console.log(output.join(' '));
}
matchFullName('ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov');
matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');
