// Task: Triangle of Dollars.
// Description: Read a positive integer n.
// Print a triangle made of '$' characters.
// The first row contains 1 '$', the second row contains 2 '$', and so on,
// until the last row contains n '$' characters.

function triangleOfDollars(n) {
    for (let row = 1; row <= n; row++) {
        let line = '';

        for (let col = 1; col <= row; col++) {
            line += '$ ';
        }

        console.log(line);
    }
}
triangleOfDollars(5);