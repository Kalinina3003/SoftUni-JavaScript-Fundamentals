// Task: Multiplication Table
// Description: Print the 10 times table for the given number.

function multipicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${(num * i)}`);
    }
}
multipicationTable(5);
multipicationTable(2);