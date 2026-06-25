// Task: Letters Combinations.
// Description:
// Generate all 3-letter combinations within the given range.
// Skip combinations containing the forbidden letter.
// Print all valid combinations and their total count.

function lettersCombinations(start, end, banned) {
    let count = 0;
    let result = '';

    for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
        if (String.fromCharCode(i) === banned) {
            continue;
        }

        for (let j = start.charCodeAt(0); j <= end.charCodeAt(0); j++) {
            if (String.fromCharCode(j) === banned) {
                continue;
            }

            for (let k = start.charCodeAt(0); k <= end.charCodeAt(0); k++) {
                if (String.fromCharCode(k) === banned) {
                    continue;
                }

                result += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `;
                count++;
            }
        }
    }

    console.log(result + count);
}
lettersCombinations('a', 'c', 'b');
lettersCombinations('f', 'k', 'h');