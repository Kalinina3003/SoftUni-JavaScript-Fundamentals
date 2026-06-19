// Task: Bomb Numbers.
// Description: Receive a sequence of numbers and a special bomb number with its power.
// For every bomb number, remove it and its neighbors on the left and right according to the given power.
// Print the sum of the remaining numbers.

function bombNumbers(numbers, bombValue) {
    let bomb = bombValue[0];
    let power = bombValue[1];

    while (numbers.includes(bomb)) {
        let index = numbers.indexOf(bomb);

        let start = Math.max(0, index - power);
        let count = power * 2 + 1;

        numbers.splice(start, count);
    }

    let sum = numbers.reduce((total, num) => total + num, 0);

    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]);