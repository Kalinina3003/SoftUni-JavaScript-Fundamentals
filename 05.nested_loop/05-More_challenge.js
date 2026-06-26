// Task: Challenge the Wedding.
// Description: Generate all possible meetings between men and women.
// Each man and woman has a number starting from 1.
// Print all pairs in the format: (man <-> woman).
// Stop when all tables are occupied.

function challengeTheWedding(men, women, tables) {
    let result = '';
    let occupiedTable = 0;

    for (let man = 1; man <= men; man++) {
        for (let woman = 1; woman <= women; woman++) {

            if (occupiedTable === tables) {
                console.log(result.trim());
                return;
            }

            result += `(${man} <-> ${woman}) `;
            occupiedTable++;
        }
    }

    console.log(result.trim());
}
challengeTheWedding(2, 2, 6);
challengeTheWedding(2, 2, 3);