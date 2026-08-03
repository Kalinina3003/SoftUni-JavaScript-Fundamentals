// Task: Sort Numbers
// Description: Receive three numbers, sort them in descending order,
// and print each number on a new line.

function sortNumbers(a, b, c) {
    if (a < b) {
        let temporary = a;
        a = b;
        b = temporary;
    }

    if (a < c) {
        let temporary = a;
        a = c;
        c = temporary;
    }

    if (b < c) {
        let temporary = b;
        b = c;
        c = temporary;
    }

    console.log(a);
    console.log(b);
    console.log(c);
}
sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);