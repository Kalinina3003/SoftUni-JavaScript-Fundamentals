// Task: House Party
// Description: Manage a guest list for a party.
// Add guests who are going Remove guests who are not going.
// Print the final guest list.

function houseParty(arr) {
    let guests = [];

    for (let command of arr) {
        let tokens = command.split(' ');
        let name = tokens[0];

        if (tokens[2] === 'going!') {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }
        } else {
            if (guests.includes(name)) {
                let index = guests.indexOf(name);
                guests.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guests.join('\n'));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);