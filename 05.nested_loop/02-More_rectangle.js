// Task: Rectangle of N x N Stars.
// Description: Read a positive integer n.
// Print a rectangle of size n x n made of '*' characters.
// - the outer loop prints n rows;
// - the inner loop prints n stars on each row.

function rectangleOfNxNStars(n) {
    for (let row = 1; row <= n; row++) {
        let line = '';

        for (let col = 1; col <= n; col++) {
            line += '*';
        }

        console.log(line);
    }
}
rectangleOfNxNStars(2);