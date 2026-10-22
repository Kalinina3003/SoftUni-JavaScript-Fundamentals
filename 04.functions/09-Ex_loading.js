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
// 30% [%%%.......]
// Still loading...

loadingBar(50);
// 50% [%%%%%.....]
// Still loading...

loadingBar(100);
// 100% Complete!
// [%%%%%%%%%%]

/*
function loadingBar(num) {

    function createBar() {
        let bar = '';

        for (let i = 1; i <= 10; i++) {
            if (i <= num / 10) {
                bar += '%';
            } else {
                bar += '.';
            }
        }

        return bar;
    }

    if (num === 100) {
        console.log(`${num}% Complete!`);
        console.log(`[${createBar()}]`);
    } else {
        console.log(`${num}% [${createBar()}]`);
        console.log('Still loading...');
    }
}
*/
