// Task: Password Generator.
// Description: Generate all possible passwords in alphabetical order.
// The password consists of 5 characters.
// The first two characters are digits from 1 to n.
// The next two characters are lowercase letters from the first l letters.
// The last character is a digit from 1 to n and must be greater than the first two digits.
// Print all passwords separated by a space.

function passwordGenerator(n, l) {
    let result = '';

    for (let first = 1; first <= n; first++) {
        for (let second = 1; second <= n; second++) {
            for (let third = 0; third < l; third++) {
                for (let fourth = 0; fourth < l; fourth++) {
                    for (let fifth = 1; fifth <= n; fifth++) {

                        if (fifth > first && fifth > second) {
                            result +=
                                `${first}${second}` +
                                `${String.fromCharCode('a'.charCodeAt(0) + third)}` +
                                `${String.fromCharCode('a'.charCodeAt(0) + fourth)}` +
                                `${fifth} `;
                        }
                    }
                }
            }
        }
    }

    console.log(result.trim());
}
passwordGenerator(2, 4);
passwordGenerator(3, 1);
passwordGenerator(3, 2);