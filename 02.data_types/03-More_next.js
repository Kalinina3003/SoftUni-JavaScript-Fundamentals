// Task: Next Day
// Description: Receive a year, month, and day,
// calculate the date of the next day, and return it in the format YYYY-M-D.

function nextDay(year, month, day) {
    let command = new Date(year, month - 1, day);

    command.setDate(command.getDate() + 1);

    return `${command.getFullYear()}-${command.getMonth() + 1}-${command.getDate()}`;
}
console.log(nextDay(2016, 9, 30));
console.log(nextDay(2020, 3, 24));