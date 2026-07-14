// Task: Rhombus of Stars.
// Description: Receive a positive integer n.
// Print a rhombus made of asterisks with size n.
// Use separate loops for the upper and lower halves.
// Print leading spaces before each row.
// Print the stars separated by spaces.

function rhombusOfStars(n) {
    for (let row = 1; row <= n; row++) {
        let line = '';

        for (let space = 1; space <= n - row; space++) {
            line += ' ';
        }

        line += '*';

        for (let star = 1; star <= row - 1; star++) {
            line += ' *';
        }

        console.log(line);
    }

    for (let row = n - 1; row >= 1; row--) {
        let line = '';

        for (let space = 1; space <= n - row; space++) {
            line += ' ';
        }

        line += '*';

        for (let star = 1; star <= row - 1; star++) {
            line += ' *';
        }

        console.log(line);
    }
}
rhombusOfStars(3);
rhombusOfStars(4);