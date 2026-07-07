// Task: Create a Dictionary.
// Description: Receive an array of JSON strings.
// Parse each string and store the term and its definition.
// If a term already exists, replace its definition.
// Sort the terms alphabetically.
// Print each term and its definition.

function makeADictionary(arr) {
    let dictionary = {};

    for (let json of arr) {
        let obj = JSON.parse(json);

        let term = Object.keys(obj)[0];
        dictionary[term] = obj[term];
    }

    let sortedTerms = Object.keys(dictionary).sort();

    for (let term of sortedTerms) {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    }
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);