// Task: NxN Matrix
// Description: Print an n x n matrix where every element is the given number.

function nxnMatrix(num) {
    for (let row = 0; row < num; row++) {
        let line = '';

        for (let col = 0; col < num; col++) {
            line += num + ' ';
        }

        console.log(line.trim());
    }
}
nxnMatrix(3);
// 3 3 3
// 3 3 3
// 3 3 3

nxnMatrix(7);
nxnMatrix(2);

/*
function nXnMatrix(n) {
    let matrix = [];

    for (let row = 0; row < n; row++) {
        matrix.push([]);

        for (let col = 0; col < n; col++) {
            matrix[row][col] = n;
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}
*/

/*
function nXnMatrix(n) {

    function createMatrix(n) {
        let matrix = [];

        for (let row = 0; row < n; row++) {
            matrix.push([]);

            for (let col = 0; col < n; col++) {
                matrix[row][col] = n;
            }
        }

        return matrix;
    }

    let output = createMatrix(n);
    
    for (let row of output) {
        console.log(row.join(' '));
    }
}
*/
