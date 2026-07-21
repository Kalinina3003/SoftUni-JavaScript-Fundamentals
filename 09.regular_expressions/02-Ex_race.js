// Task: Race.
// Description: Receive a list of racers and race data until "end of race".
// Extract each racer's name (letters only) and the distance they ran (sum of all digits).
// Count the distance only for racers from the initial list and accumulate it if they appear multiple times.
// Print the top 3 racers sorted by total distance in descending order.

function race(arr) {
    let racers = arr.shift().split(', ');
    let results = {};

    for (let line of arr) {
        if (line === 'end of race') {
            break;
        }

        let letters = line.match(/[A-Za-z]/g);
        let name = letters.join('');

        let digits = line.match(/\d/g);

        let distance = 0;

        if (digits) {
            for (let digit of digits) {
                distance += Number(digit);
            }
        }

        if (racers.includes(name)) {
            if (!results.hasOwnProperty(name)) {
                results[name] = 0;
            }

            results[name] += distance;
        }
    }

    let sorted = Object.entries(results).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);