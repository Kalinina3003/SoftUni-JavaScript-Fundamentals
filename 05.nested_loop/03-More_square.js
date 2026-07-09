// Task: Square of Stars.
// Description: Read a positive integer n.
// Print an n x n square of '*' characters.
// Separate each pair of stars with a single space.

function squareOfStars(n) {
    for (let row = 1; row <= n; row++) {
        let line = '';

        for (let col = 1; col <= n; col++) {
            line += '* ';
        }

        console.log(line);
    }
}
squareOfStars(3);