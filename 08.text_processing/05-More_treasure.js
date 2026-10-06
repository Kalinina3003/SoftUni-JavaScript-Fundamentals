// Task: Treasure Finder.
// Description: Receive a numeric key and encrypted messages.
// Decrypt each message by subtracting the repeating key values from the ASCII codes.
// Extract the treasure type and coordinates and print them.

function treasureFinder(arr) {
    let key = arr[0].split(' ').map(Number);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === 'find') {
            break;
        }

        let message = '';
        let text = arr[i];

        for (let j = 0; j < text.length; j++) {
            let keyNumber = key[j % key.length];

            let asciiCode = text.charCodeAt(j);
            let decryptedCode = asciiCode - keyNumber;

            message += String.fromCharCode(decryptedCode);
        }

        let typeStart = message.indexOf('&') + 1;
        let typeEnd = message.indexOf('&', typeStart);

        let type = message.substring(typeStart, typeEnd);

        let coordinatesStart = message.indexOf('<') + 1;
        let coordinatesEnd = message.indexOf('>');

        let coordinates = message.substring(
            coordinatesStart,
            coordinatesEnd
        );

        console.log(`Found ${type} at ${coordinates}`);
    }
}
treasureFinder(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"]
);
// Found gold at 10N70W
// Found Silver at 32S43W;

treasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]
);
// Found gold at 0S123E
// Found gold at 102N43W
// Found ore at 23S43W