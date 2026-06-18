// Task: Train Wagons.
// Description: Receive the current passengers in each train wagon and the maximum wagon capacity.
// Commands:
// - Add {passengers} -> add a new wagon at the end with the given number of passengers;
// - {passengers} -> place all passengers in the first wagon that has enough free space;
// Print the final state of the train with all wagon passenger counts separated by spaces.

function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        if (command.includes('Add')) {
            let tokens = command.split(' ');
            let passengers = Number(tokens[1]);
            wagons.push(passengers);
        } else {
            let passengers = Number(command);

            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + passengers <= capacity) {
                    wagons[j] += passengers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);