// Task: Add and Remove Numbers
// Description: Process commands to add the current number to an array 
// or remove its last element.

function addAndRemove(arr) {
    let numbers = [];
    let number = 1;

    for (let command of arr) {
        if (command === 'add') {
            numbers.push(number);
        } else if (command === 'remove') {
            numbers.pop();
        }

        number++;
    }

    if (numbers.length === 0) {
        console.log('Empty');
    } else {
        console.log(numbers.join(' '));
    }
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);