// Task: Air Pollution
// Description: Receive a 5x5 pollution map and commands.
// Apply breeze, gale and smog effects to the map.
// Find and print the coordinates of all polluted areas (PM >= 50).

function airPollution(map, forces) {
    let matrix = map.map(row => row.split(' ').map(Number));

    for (let force of forces) {
        let [type, value] = force.split(' ');
        value = Number(value);

        if (type === 'breeze') {

            for (let col = 0; col < 5; col++) {
                matrix[value][col] = Math.max(0, matrix[value][col] - 15);
            }
        } else if (type === 'gale') {

            for (let row = 0; row < 5; row++) {
                matrix[row][value] = Math.max(0, matrix[row][value] - 20);
            }
        } else if (type === 'smog') {

            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    matrix[row][col] += value;
                }
            }
        }
    }

    let pollutedAreas = [];

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {

            if (matrix[row][col] >= 50) {
                pollutedAreas.push(`[${row}-${col}]`);
            }
        }
    }

    if (pollutedAreas.length > 0) {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    } else {
        console.log(`No polluted areas`);
    }
}
airPollution(['5 7 3 28 32',
    '41 12 49 30 33',
    '3 16 20 42 12',
    '2 20 10 39 14',
    '7 34 4 27 24'],
    ['smog 11', 'gale 3', 'breeze 1', 'smog 2']
);
airPollution(['5 7 2 14 4',
    '21 14 2 5 3',
    '3 16 7 42 12',
    '2 20 8 39 14',
    '7 34 1 10 24'],
    ['breeze 1', 'gale 2', 'smog 35']
);