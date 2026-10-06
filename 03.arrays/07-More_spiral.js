// Task: Generate Spiral Matrix
// Description: Fill a matrix with numbers in a spiral pattern.

function spiralMatrix(rows, columns) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    let number = 1;

    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = columns - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = number++;
        }

        top++;

        for (let j = top; j <= bottom; j++) {
            matrix[j][right] = number++;
        }

        right--;

        if (top <= bottom) {
            for (let k = right; k >= left; k--) {
                matrix[bottom][k] = number++;
            }

            bottom--;
        }

        if (left <= right) {
            for (let c = bottom; c >= top; c--) {
                matrix[c][left] = number++;
            }

            left++;
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}
spiralMatrix(5, 5);
// 1 2 3 4 5
// 16 17 18 19 6
// 15 24 25 20 7
// 14 23 22 21 8
// 13 12 11 10 9

spiralMatrix(3, 3);
// 1 2 3
// 8 9 4
// 7 6 5

/*
function spiralMatrix(numRow, numCol) {
    let matrix = [];

    for (let row = 0; row < numRow; row++) {
        matrix.push([]);

        for (let col = 0; col < numCol; col++) {
            matrix[row][col] = 0;
        }
    }

    let top = 0;              // row      
    let right = numCol - 1;   // col; 2
    let bottom = numRow - 1;  // row; 2
    let left = 0;             // col

    let number = 1;

    while (top <= bottom && left <= right) {

        // top
        for (let col = left; col <= right; col++) {
            matrix[top][col] = number;
            number++;
        }

        top++;

        if (top > bottom) {
            break;
        }

        // right
        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = number;
            number++;
        }

        right--;

        if (right < left) {
            break;
        }

        // bottom
        for (let col = right; col >= left; col--) {
            matrix[bottom][col] = number;
            number++;
        }

        bottom--;

        if (bottom < top) {
            break;
        }

        // left
        for (let row = bottom; row >= top; row--) {
            matrix[row][left] = number;
            number++;
        }

        left++;

        if (left > right) {
            break;
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}
*/
