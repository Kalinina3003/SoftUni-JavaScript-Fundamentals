// Task: Diagonal Attack
// Description: Compare the sums of both main diagonals 
// and replace non-diagonal elements if they are equal.

function diagonalAttack(arr) {
    let matrix = arr.map(row => row.split(' ').map(Number));

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - 1 - i];
    }

    if (mainDiagonal !== secondaryDiagonal) {
        for (let row of matrix) {
            console.log(row.join(' '));
        }

        return;
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if (col !== row && col !== matrix.length - 1 - row) {
                matrix[row][col] = mainDiagonal;
            }
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']);