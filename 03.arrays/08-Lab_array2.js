// Task: Array Manipulator.
// Description: Receive an array of numbers and a list of commands.
// Commands:
// - Add {number} -> add the number to the end of the array;
// - Remove {number} -> remove all occurrences of the number;
// - RemoveAt {index} -> remove the element at the given index;
// - Insert {number} {index} -> insert the number at the given index;
// Print the final array on a single line separated by spaces.

function arrayManipulations(input) {
    let numbers = input.shift().split(' ').map(Number);

    for (let command of input) {
        let tokens = command.split(' ');
        let action = tokens[0];

        if (action === 'Add') {
            let number = Number(tokens[1]);
            numbers.push(number);
        } else if (action === 'Remove') {
            let number = Number(tokens[1]);
            numbers = numbers.filter(i => i !== number);
        } else if (action === 'RemoveAt') {
            let index = Number(tokens[1]);
            numbers.splice(index, 1);
        } else if (action === 'Insert') {
            let number = Number(tokens[1]);
            let index = Number(tokens[2]);
            numbers.splice(index, 0, number);
        }
    }

    console.log(numbers.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']);