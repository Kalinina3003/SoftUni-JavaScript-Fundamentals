// Task: Convert to JSON.
// Description: Receive a first name, last name, and hair color.
// Create an object with these properties.
// Convert the object to a JSON string.
// Print the resulting JSON string.

function convertToJson(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };

    let personJson = JSON.stringify(person);

    console.log(personJson);
}
convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');