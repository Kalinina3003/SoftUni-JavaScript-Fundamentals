// Task: Square Frame.
// Description: Read a positive integer n.
// Print a square frame of size n x n.
// Use '+' for the four corners, '-' for the horizontal edges,
// and '|' for the vertical edges.

function squareFrame(n) {
    let topBottom = '+';

    for (let col = 1; col <= n - 2; col++) {
        topBottom += ' -';
    }

    topBottom += ' +';
    console.log(topBottom);

    for (let row = 1; row <= n - 2; row++) {
        let middle = '|';

        for (let col = 1; col <= n - 2; col++) {
            middle += ` -`;
        }

        middle += ' |';
        console.log(middle);
    }

    console.log(topBottom);
}
squareFrame(7);