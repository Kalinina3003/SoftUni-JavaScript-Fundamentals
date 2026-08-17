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
spiralMatrix(3, 3);