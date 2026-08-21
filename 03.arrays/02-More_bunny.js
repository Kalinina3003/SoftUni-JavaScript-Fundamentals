// Task: Bunny Kill
// Description: Receive a matrix of bunny values and coordinates of bomb bunnies.
// Explode bomb bunnies in the given order, damage their neighbors,
// then kill all remaining alive bunnies and count Snowball's damage.

function bunnyKill(arr) {
    let matrix = arr.slice(0, -1).map(row => row.split(' ').map(Number));
    let bombCoordinates = arr[arr.length - 1].split(' ');

    let damage = 0;
    let killedBunnies = 0;

    for (let coordinate of bombCoordinates) {
        let [row, col] = coordinate.split(',').map(Number);

        if (matrix[row][col] === 0) {
            continue;
        }

        let explosionDamage = matrix[row][col];

        damage += explosionDamage;
        killedBunnies++;
        matrix[row][col] = 0;

        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = col - 1; c <= col + 1; c++) {

                if (r === row && c === col) {
                    continue;
                }

                if (r >= 0 && r < matrix.length &&
                    c >= 0 && c < matrix[r].length) {
                    matrix[r][c] -= explosionDamage;

                    if (matrix[r][c] < 0) {
                        matrix[r][c] = 0;
                    }
                }
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if (matrix[row][col] > 0) {
                damage += matrix[row][col];
                killedBunnies++;
            }
        }
    }

    console.log(damage);
    console.log(killedBunnies);
}
bunnyKill(
    ['10 10 10',
        '10 10 10',
        '10 10 10',
        '0,0']);
bunnyKill(
    ['5 10 15 20',
        '10 10 10 10',
        '10 15 10 10',
        '10 10 10 10',
        '2,2 0,1']);