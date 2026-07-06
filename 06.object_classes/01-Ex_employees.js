// Task: Create Employee List.
// Description: Receive an array of employee names.
// Assign each employee a personal number equal to the length of their name.
// Print the employees and their personal numbers.

function employees(arr) {
    for (let employeeName of arr) {
        let personalNum = employeeName.length;

        let employeeObj = {
            name: employeeName,
            personalNumber: personalNum
        };

        console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.personalNumber}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);