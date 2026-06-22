// Task: Building.
// Description: Receive the number of floors and rooms per floor.
// Print all room numbers in descending order by floor.
// Use nested loops to iterate through floors and rooms.
// The last floor always contains large apartments marked with 'L'.
// Even floors contain offices marked with 'O'.
// Odd floors contain apartments marked with 'A'.
// Room numbers start from 0 on every floor.

function building(floors, rooms) {
    for (let i = floors; i >= 1; i--) { // floor

        let result = '';

        for (let k = 0; k < rooms; k++) {  // room

            if (i === floors) {
                result += `L${i}${k} `;
            } else if (i % 2 === 0) {
                result += `O${i}${k} `
            } else {
                result += `A${i}${k} `
            }
        }
        console.log(result);
    }
}
building(6, 4);
building(9, 5);
building(4, 4);