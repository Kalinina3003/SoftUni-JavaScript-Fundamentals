// Task: Print N Elements
// Description: Collect and print every N-th element of an array, starting from the first element.

function printNElements(arr) {
    let step = Number(arr[arr.length - 1]);
    let result = [];

    for (let i = 0; i < arr.length - 1; i += step) {
        result.push(arr[i]);
    }

    console.log(result.join(' '));
}
printNElements(['5', '20', '31', '4', '20', '2']);
printNElements(['dsa', 'asd', 'test', 'test', '2']);
printNElements(['1', '2', '3', '4', '5', '6']);