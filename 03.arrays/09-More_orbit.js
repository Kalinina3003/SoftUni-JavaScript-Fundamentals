// Task: Build Orbits
// Description: Fill each cell with a value based on 
// its distance from the star.

function orbit(arr) {
    let rows = arr[0];
    let cols = arr[1];
    let starRow = arr[2];
    let starCol = arr[3];

    let matrix = [];

    for (let row = 0; row < rows; row++) {
        matrix.push([]);

        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}
orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);