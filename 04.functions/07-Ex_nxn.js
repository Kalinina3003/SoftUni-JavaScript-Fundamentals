// Task: NxN Matrix
// Description: Print an n x n matrix where every element is the given number.

function nxnMatrix(num) {
    for (let row = 0; row < num; row++) {
        let line = '';

        for (let col = 0; col < num; col++) {
            line += num + ' ';
        }

        console.log(line.trim());
    }
}
nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);