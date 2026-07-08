// Task: Meetings.
// Description: Receive an array of weekday and person name pairs.
// Schedule meetings for available weekdays.
// If a weekday is already booked, print a conflict message.
// Print all successfully scheduled meetings.

function meetings(arr) {
    let appointment = {};

    for (let entry of arr) {
        let parsedArr = entry.split(' ');

        [weekday, fullName] = parsedArr;

        if (appointment.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            appointment[weekday] = fullName;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (let weekday in appointment) {
        console.log(`${weekday} -> ${appointment[weekday]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);