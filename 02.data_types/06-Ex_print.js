// Task: Numbers from Start to End
// Description: Print all numbers from the given start to end and their sum.

function printAndSum(start, end) {
    let result = '';
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;

        result += `${i} `;
    }

    console.log(result.trim());
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);