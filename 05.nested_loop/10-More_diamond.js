// Task: Diamond.
// Description: Print a diamond with the given size.
// Build each row separately.
// Print the left dashes, the stars, the middle dashes (if needed),
// and the right dashes.
// Adjust the number of dashes before and after the middle row.

function diamond(n) {
    let leftRight;
    let mid;

    if (n % 2 === 0) {
        leftRight = n / 2 - 1;
        mid = 0;
    } else {
        leftRight = Math.floor(n / 2);
        mid = -1;
    }

    while (leftRight >= 0) {
        let line = '-'.repeat(leftRight);
        line += '*';

        if (mid >= 0) {
            line += '-'.repeat(mid);
            line += '*';
        }

        line += '-'.repeat(leftRight);

        console.log(line);

        leftRight--;
        mid += 2;
    }

    leftRight = 1;
    mid -= 4;

    while (leftRight <= Math.floor((n - 1) / 2)) {
        let line = '-'.repeat(leftRight);
        line += '*';

        if (mid >= 0) {
            line += '-'.repeat(mid);
            line += '*';
        }

        line += '-'.repeat(leftRight);

        console.log(line);

        leftRight++;
        mid -= 2;
    }
}
diamond(7);
diamond(8);