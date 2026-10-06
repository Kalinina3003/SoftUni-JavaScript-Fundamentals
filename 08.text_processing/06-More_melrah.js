// Task: Melrah Shake.
// Description: Remove the first and last occurrences of a pattern from a string.
// After each successful shake, remove the middle character from the pattern.
// Repeat until the pattern is empty or fewer than two matches remain.

function melrahShake(arr) {
    let text = arr[0];
    let pattern = arr[1];

    while (pattern.length > 0) {
        let firstIndex = text.indexOf(pattern);
        let lastIndex = text.lastIndexOf(pattern);

        if (firstIndex === -1 || firstIndex === lastIndex) {
            break;
        }

        text = text.slice(0, firstIndex) +
            text.slice(firstIndex + pattern.length);

        lastIndex = text.lastIndexOf(pattern);

        text = text.slice(0, lastIndex) +
            text.slice(lastIndex + pattern.length);

        console.log('Shaked it.');

        let middleIndex = Math.floor(pattern.length / 2);

        pattern = pattern.slice(0, middleIndex) +
            pattern.slice(middleIndex + 1);
    }

    console.log('No shake.');
    console.log(text);
}
melrahShake(
    ['astalavista baby',
        'sta']
);
// Shaked it.
// No shake.
// alavi baby 

melrahShake(
    ['##mtm!!mm.mm*mtm.#',
        'mtm']
);
// Shaked it.
// Shaked it.
// No shake.
// ##!!.*.#