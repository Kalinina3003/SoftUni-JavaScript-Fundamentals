// Task: Latin Letters Triples
// Description: Print all possible triples of the first n lowercase Latin letters.

function triplesOfLatinLetters(n) {
    n = Number(n);

    for (let first = 0; first < n; first++) {
        for (let second = 0; second < n; second++) {
            for (let third = 0; third < n; third++) {

                let a = String.fromCharCode(97 + first);
                let b = String.fromCharCode(97 + second);
                let c = String.fromCharCode(97 + third);

                console.log(a + b + c);
            }
        }
    }
}
triplesOfLatinLetters('3');
triplesOfLatinLetters('2');