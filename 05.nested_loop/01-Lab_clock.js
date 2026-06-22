// Task: Clock.
// Description: Print every time in a 24-hour day, starting from 0:0 and ending at 23:59.

function clock() {
    for (let hour = 0; hour <= 23; hour++) {
        for (let min = 0; min <= 59; min++) {
            console.log(`${hour}:${min}`);
        }
    }
}
clock();
