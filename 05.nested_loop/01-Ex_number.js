// Task: Number Pyramid.
// Description: Receive an integer n.
// Print the numbers from 1 to n in a pyramid shape.
// Each row contains one more number than the previous row.
// Stop printing when the number reaches n.

function numberPyramid(n) {
    let current = 1;

    for (let row = 1; row <= n; row++) {
        let line = '';

        for (let col = 1; col <= row; col++) {
            line += current + ' ';

            if (current === n) {
                console.log(line.trim());
                return;
            }
            
            current++;
        }

        console.log(line.trim());
    }
}
numberPyramid(7);
numberPyramid(12);
numberPyramid(15);