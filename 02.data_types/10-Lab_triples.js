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

/*
function triplesOfLatinLetters(n) {
    n = Number(n);

    let start = 97;
    let end = 97 + n;

    for (let i = start; i < end; i++) {
        let letter1 = String.fromCharCode(i);

        for (let j = start; j < end; j++) {
            let letter2 = String.fromCharCode(j);

            for (let k = start; k < end; k++) {
                let letter3 = String.fromCharCode(k);

                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}
*/
