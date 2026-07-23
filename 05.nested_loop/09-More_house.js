// Task: House.
// Description: Print a house with the given size.
// Print the roof using stars and dashes.
// Increase the number of stars by 2 on each row.
// Center the roof with dashes on both sides.
// Print the base of the house using vertical bars.
// Fill the inside with stars.

function house(n) {
    let stars = n % 2 === 0 ? 2 : 1;

    for (let row = 1; row <= Math.ceil(n / 2); row++) {
        let dashes = (n - stars) / 2;

        console.log(
            '-'.repeat(dashes) +
            '*'.repeat(stars) +
            '-'.repeat(dashes)
        );

        stars += 2;
    }

    for (let row = 1; row <= Math.floor(n / 2); row++) {

        console.log(
            '|' +
            '*'.repeat(n - 2) +
            '|'
        );
    }
}
house(5);
house(6);