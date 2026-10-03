// Task: Serialize String.
// Description: Receive a string containing any ASCII characters.
// Store each character and all indexes where it appears.
// Print each character followed by its indexes separated by "/".

function serializeString(arr) {
    let text = arr[0];
    let result = {};

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (!result[char]) {
            result[char] = [];
        }

        result[char].push(i);
    }

    for (let char in result) {
        console.log(`${char}:${result[char].join('/')}`);
    }
}
serializeString(["abababa"]);
// a:0/2/4/6
// b:1/3/5;

serializeString(["avjavamsdmcalsdm"]);
// a:0/3/5/11
// v:1/4
// j:2
// m:6/9/15
// s:7/13
// d:8/14
// c:10
// l:12;