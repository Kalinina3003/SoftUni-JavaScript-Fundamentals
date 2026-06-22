// Task: Multiplication Table.
// Description: Print the multiplication table for numbers from 1 to 10.

function multiplicationTable() {
    for (let x = 1; x <= 10; x++) {
        for (let y = 1; y <= 10; y++) {
            let resut = x * y;
            console.log(`${x} * ${y} = ${resut}`);
        }
    }
}
multiplicationTable();