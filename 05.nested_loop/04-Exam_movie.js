// Task: Movie Tickets.
// Description: Generate all possible ticket numbers.
// The first symbol is an ASCII character from a1 to a2 - 1.
// The second digit is from 1 to n - 1.
// The third digit is from 1 to n / 2 - 1.
// The fourth symbol is the ASCII code of the first character.
// Print only the tickets where the ASCII code is odd
// and the sum of the second digit, third digit,
// and ASCII code is also odd.

function movieTickets(a1, a2, n) {
    for (let ascii = a1; ascii < a2; ascii++) {
        for (let second = 1; second < n; second++) {
            for (let third = 1; third < Math.floor(n / 2); third++) {

                if (ascii % 2 !== 0 && (ascii + second + third) % 2 !== 0) {
                    let symbol = String.fromCharCode(ascii);

                    console.log(`${symbol}-${second}${third}${ascii}`);
                }
            }
        }
    }
}
movieTickets(86, 88, 4);
movieTickets(71, 74, 6);