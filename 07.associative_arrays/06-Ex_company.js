// Task: Company Employees.
// Description: Receive a list of companies and employees.
// Store unique employee IDs for each company.
// Sort companies by name.
// Print each company and its employees.

function companyUsers(arr) {
    let companyEmployees = {};

    for (let employeeStr of arr) {
        let [company, employeeId] = employeeStr.split(' -> ');

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(employeeId)) {
                companyEmployees[company].push(employeeId);
            }
        } else {
            companyEmployees[company] = [employeeId];
        }
    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employeeIdArr] of entries) {
        console.log(`${company}`);
        
        for (let id of employeeIdArr) {
            console.log(`-- ${id}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);