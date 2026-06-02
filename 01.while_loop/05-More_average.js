// Task: Average Number
// Description: Read an integer n, then read n integers,
// calculate their sum, and print the average value.

function averageNumber(input) {
    let index = 0;
    let countNums = Number(input[index++]);

    let sum = 0;
    let count = 0;

    while (count < countNums) {
        let num = Number(input[index++]);
        sum += num;
        count++;
    }

    console.log((sum / countNums).toFixed(2));
}
averageNumber(["4", "3", "2", "4", "2"]);

/*
Alternative solution:

function averageNumber(input) {
    let countNums = Number(input[0]);
    let sum = 0;

    for (let i = 1; i <= countNums; i++) {
        sum += Number(input[i]);
    }

    let avg = sum / countNums;
    console.log(avg.toFixed(2));
}
*/
