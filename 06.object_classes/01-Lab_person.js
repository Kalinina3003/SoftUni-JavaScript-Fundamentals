// Task: Person Info.
// Description: Receive three parameters: first name, last name, and age.
// Create an object using these values.

function personInfo(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    return person;
}
console.log(personInfo("Peter",
    "Pan",
    "20"));
console.log(personInfo("George",
    "Smith",
    "18"));

/*
1-st;
function personInfo(firstName, lastName, age) {
    let person = {};

    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}

2-d;
function personInfo(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
}
*/
