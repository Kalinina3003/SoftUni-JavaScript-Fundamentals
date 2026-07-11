// Task: SoftUni Party.
// Description: Receive a list of guest reservations.
// Separate guests into VIP and regular lists.
// After the "PARTY" command, remove each arriving guest.
// Print the number of guests who did not attend.
// Print all absent VIP guests first, then regular guests.

function partyTime(arr) {
    let partyIndex = arr.indexOf('PARTY');

    let guests = arr.slice(0, partyIndex);

    for (let i = partyIndex + 1; i < arr.length; i++) {
        let currentGuest = arr[i];

        let index = guests.indexOf(currentGuest);

        if (index !== -1) {
            guests.splice(index, 1);
        }
    }

    let vipGuests = [];
    let regularGuests = [];

    for (let guest of guests) {
        if (guest[0] >= '0' && guest[0] <= '9') {
            vipGuests.push(guest);
        } else {
            regularGuests.push(guest);
        }
    }

    console.log(guests.length);

    vipGuests.forEach(guest => console.log(guest));
    regularGuests.forEach(guest => console.log(guest));
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);