// Task: Special Car Numbers.
// Description: Generate all 4-digit numbers using digits in the given range.
// A number is special when:
// - the first and last digits have opposite parity (even/odd);
// - the first digit is greater than the last;
// - the sum of the second and third digits is even.

function carNumber(start, end) {
    let result = '';

    for (let first = start; first <= end; first++) {
        for (let second = start; second <= end; second++) {
            for (let third = start; third <= end; third++) {
                for (let last = start; last <= end; last++) {

                    if (first <= last) {
                        continue;
                    }

                    if ((second + third) % 2 !== 0) {
                        continue;
                    }

                    if (first % 2 === last % 2) {
                        continue;
                    }

                    result += `${first}${second}${third}${last} `;
                }
            }
        }
    }

    console.log(result);
}
carNumber(2, 3);
carNumber(3, 5);