// Task: Phone Book.
// Description: Store names and phone numbers.
// Replace duplicate names with the latest phone number.
// Print all entries.

function phoneBook(arr) {
    let phoneList = {};

    for (let entry of arr) {
        let parsedArr = entry.split(' ');

        [fullName, phoneNumber] = parsedArr;

        phoneList[fullName] = phoneNumber;
    }

    for (let key in phoneList) {
        console.log(`${key} -> ${phoneList[key]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']);
