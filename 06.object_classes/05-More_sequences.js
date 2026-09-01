// Task: Sequences.
// Description: Store unique sequences of numbers,
// discard duplicates regardless of order,
// sort them by length and print each sequence in descending order.

function sequences(input) {
    let sequences = [];

    for (let str of input) {
        let arr = JSON.parse(str);

        arr.sort((a, b) => a - b);

        let exists = false;

        for (let seq of sequences) {

            if (seq.length === arr.length &&
                seq.every((num, index) => num === arr[index])) {

                exists = true;
                break;
            }
        }

        if (!exists) {
            sequences.push(arr);
        }
    }

    sequences.sort((a, b) => a.length - b.length);

    for (let arr of sequences) {
        arr.sort((a, b) => b - a);

        console.log(`[${arr.join(', ')}]`);
    }
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);
sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
);