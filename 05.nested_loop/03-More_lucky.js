// Task: Lucky Numbers.
// Description: Generate all 4-digit numbers using digits from 1 to 9.
// A number is lucky when:
// - the sum of the first two digits equals the sum of the last two digits;
// - N is divisible by the sum of the first two digits.
// Print all lucky numbers separated by spaces.

function luckyNumbers(n) {
    let result = '';

    for (let first = 1; first <= 9; first++) {
        for (let second = 1; second <= 9; second++) {
            for (let third = 1; third <= 9; third++) {
                for (let fourth = 1; fourth <= 9; fourth++) {

                    let firstSum = first + second;
                    let secondSum = third + fourth;

                    if (firstSum === secondSum && n % firstSum === 0) {
                        result += `${first}${second}${third}${fourth} `;
                    }
                }
            }
        }
    }

    console.log(result);
}
luckyNumbers(3);
luckyNumbers(7);
luckyNumbers(24);