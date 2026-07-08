// Task: Address Book.
// Description: Store names and addresses.
// Replace duplicate names with the latest address.
// Sort the entries by name.
// Print all entries.

function addressBook(arr) {
    let addressList = {};

    for (let entry of arr) {
        let parsedArr = entry.split(':');

        [fullName, address] = parsedArr;

        addressList[fullName] = address;
    }

    let addressListEntries = Object.entries(addressList);

    addressListEntries.sort((first, second) => {
        let firstKey = first[0];
        let secondKey = second[0];

        return firstKey.localeCompare(secondKey);
    });

    for (let [fullName, address] of addressListEntries) {
        console.log(`${fullName} -> ${address}`);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);