// Task: Sunglasses.
// Description: Print sunglasses with the given size.
// Print the top and bottom frames using stars.
// Print the lenses with slashes.
// On the middle row, replace the gap between the lenses with vertical bars.
// Use loops to generate each part of the sunglasses.

function sunglasses(n) {
    console.log('*'.repeat(2 * n) + ' '.repeat(n) + '*'.repeat(2 * n));

    for (let row = 1; row <= n - 2; row++) {
        let bridge = ' '.repeat(n);

        if (row === Math.floor((n - 1) / 2)) {
            bridge = '|'.repeat(n);
        }

        console.log(
            '*' +
            '/'.repeat(2 * n - 2) +
            '*' +
            bridge +
            '*' +
            '/'.repeat(2 * n - 2) +
            '*'
        );
    }

    console.log('*'.repeat(2 * n) + ' '.repeat(n) + '*'.repeat(2 * n));
}
sunglasses(3);
sunglasses(4);