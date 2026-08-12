// Task: Leap Year
// Description: Check if a given year is a leap year
// and print "yes" or "no".

function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
leapYear(1984);
leapYear(2003);
leapYear(4);