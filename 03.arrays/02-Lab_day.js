// Task: Day of Week
// Description: Receive a number and print the corresponding day of the week in English.
// Print "Invalid day!" if the number is not between 1 and 7.

function dayOfWeek(day) {
    let days = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (day >= 1 && day <= 7) {
        console.log(days[day - 1]);
    } else {
        console.log('Invalid day!');
    }
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);