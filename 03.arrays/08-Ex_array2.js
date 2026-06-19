// Task: Array Modifier.
// Description: Modify an array by executing a series of commands.
// Print the final array after all commands are completed.

function arrayManipulator(nums, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action === 'add') {
            let index = Number(tokens.shift());
            let elements = Number(tokens.shift());

            nums.splice(index, 0, elements);
        } else if (action === 'addMany') {
            let index = Number(tokens.shift());
            let elements = tokens.map(Number);

            nums.splice(index, 0, ...elements);
        } else if (action === 'contains') {
            let elements = Number(tokens.shift());
            console.log(nums.indexOf(elements));
        } else if (action === 'remove') {
            let index = Number(tokens.shift());
            nums.splice(index, 1);
        } else if (action === 'shift') {
            let rotations = Number(tokens.shift());

            for (let rotation = 1; rotation <= rotations; rotation++) {
                let firstEl = nums.shift();
                nums.push(firstEl);
            }
        } else if (action === 'sumPairs') {
            let pairSums = [];

            for (let i = 0; i < nums.length; i += 2) {
                let currentNum = nums[i];
                let nextNum = nums[i + 1];

                if (nextNum) {
                    pairSums.push(currentNum + nextNum);
                } else {
                    pairSums.push(currentNum);
                }
            }

            nums = pairSums;
        } else if (action === 'print') {
            console.log(`[ ${nums.join(', ')} ]`);
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);