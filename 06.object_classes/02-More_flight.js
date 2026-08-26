// Task: Manage flight statuses.
// Description: Create flight objects from the schedule,
// update their statuses using the changed status list,
// and print flights with the requested status.

function flightSchedule(arr) {
    let flights = arr[0];
    let changeStatuses = arr[1];
    let statusToCheck = arr[2][0];

    let flightsObj = {};

    for (let flight of flights) {
        let parts = flight.split(' ');
        let flightNumber = parts[0];
        let destination = parts.slice(1).join(' ');

        flightsObj[flightNumber] = {
            Destination: destination,
            Status: 'Ready to fly'
        };
    }

    for (let changed of changeStatuses) {
        let parts = changed.split(' ');
        let flightNumber = parts[0];
        let status = parts.slice(1).join(' ');

        if (flightsObj[flightNumber]) {
            flightsObj[flightNumber].Status = status;
        }
    }

    for (let flightNumber in flightsObj) {
        let flight = flightsObj[flightNumber];

        if (statusToCheck === 'Ready to fly') {
            if (flight.Status === 'Ready to fly') {
                console.log(flight);
            }
        } else {
            if (flight.Status === statusToCheck) {
                console.log(flight);
            }
        }
    }
}
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]);
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]);
