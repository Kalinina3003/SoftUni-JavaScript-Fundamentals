// Task: Check Magic Matrix
// Description: Check if the sums of all rows and columns are equal.

function magicMatrices(matrix) {
    let rowSum = 0;
   
    for (let i = 0; i < matrix[0].length; i++) {
        rowSum += matrix[0][i];
    }

    for (let i = 0; i < matrix.length; i++) {
        let currentRowSum = 0;

        for (let j = 0; j < matrix[i].length; j++) {
            currentRowSum += matrix[i][j];
        }

        if (currentRowSum !== rowSum) {
            return false;
        }
    }

    for (let j = 0; j < matrix[0].length; j++) {
        let currentColumnSum = 0;

        for (let i = 0; i < matrix.length; i++) {
            currentColumnSum += matrix[i][j];
        }

        if (currentColumnSum !== rowSum) {
            return false;
        }
    }

    return true;
}
console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));
console.log(magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]));
console.log(magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]));