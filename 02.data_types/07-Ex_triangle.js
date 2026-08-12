// Task: Print Triangle
// Description: Receive a number n and print a triangle
// with numbers from 1 to n.

function triangleOfNumbers(n) {
    for (let row = 1; row <= n; row++) {
        let currentRow = '';

        for (let col = 1; col <= row; col++) {
            currentRow += `${row} `;
        }

        console.log(currentRow.trim());
    }
}
triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);