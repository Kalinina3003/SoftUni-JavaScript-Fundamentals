// Task: Deserialize String.
// Description: Receive characters and their indexes until "end".
// Place each character at its specified indexes.
// Print the reconstructed string.

function deserializeString(arr) {
    let result = [];

    for (let input of arr) {
        if (input === 'end') {
            break;
        }

        let [char, indexes] = input.split(':');
        let positions = indexes.split('/').map(Number);

        for (let index of positions) {
            result[index] = char;
        }
    }

    console.log(result.join(''));
}
deserializeString(['a:0/2/4/6',
    'b:1/3/5',
    'end']);
// abababa;

deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']);
// avjavamsdmcalsdm;