// Task: Loading Bar
// Description: Receive a number from 0 to 100 (divisible by 10).
// Build a loading bar with "%" and ".". Print "Complete!" if the number is 100.
// Otherwise print "Still loading...".

function loadingBar(num) {
    let bar = '';

    for (let i = 1; i <= 10; i++) {
        if (i <= num / 10) {
            bar += '%';
        } else {
            bar += '.';
        }
    }

    if (num === 100) {
        console.log(`${num}% Complete!`);
        console.log(`[${bar}]`);
    } else {
        console.log(`${num}% [${bar}]`);
        console.log('Still loading...');
    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);