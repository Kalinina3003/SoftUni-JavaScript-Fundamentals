// Task: Wedding Seats.
// Description: Generate all seats in the wedding hall.
// Sectors are from A to the given last sector.
// Each next sector has one more row than the previous.
// Odd rows have the given number of seats.
// Even rows have 2 more seats.
// Print every seat and the total number of seats.

function weddingSeats(lastSector, firstSectorRows, oddSeats) {
    let totalSeats = 0;
    let rows = firstSectorRows;

    for (let sector = 'A'.charCodeAt(0); sector <= lastSector.charCodeAt(0); sector++) {
        for (let row = 1; row <= rows; row++) {

            let seats = 0;

            if (row % 2 === 0) {
                seats = oddSeats + 2;
            } else {
                seats = oddSeats;
            }

            for (let seat = 0; seat < seats; seat++) {
                console.log(`${String.fromCharCode(sector)}${row}${String.fromCharCode('a'.charCodeAt(0) + seat)}`);
                totalSeats++;
            }
        }

        rows++;
    }

    console.log(totalSeats);
}
weddingSeats('B', 3, 2);
weddingSeats('C', 4, 2);