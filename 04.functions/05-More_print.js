// Task: DNA Helix.
// Description: Receive the helix length and print the DNA structure
// using the repeating sequence "ATCGTTAGGG".

function printDna(length) {
    let sequence = 'ATCGTTAGGG';

    for (let i = 0; i < length; i++) {
        let first = sequence[(i * 2) % sequence.length];
        let second = sequence[(i * 2 + 1) % sequence.length];

        let pattern = i % 4;

        if (pattern === 0) {
            console.log(`**${first}${second}**`);
        } else if (pattern === 1) {
            console.log(`*${first}--${second}*`);
        } else if (pattern === 2) {
            console.log(`${first}----${second}`);
        } else {
            console.log(`*${first}--${second}*`);
        }
    }
}
printDna(4);
printDna(10);