// Task: English Name of Last Digit
// Description: Receive a number, find its last digit,
// and print the English name of that digit.

function englishName(number) {
    let lastDigit = number % 10;

    switch (lastDigit) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
    }
}
console.log(englishName(512));
console.log(englishName(1));
console.log(englishName(1643));