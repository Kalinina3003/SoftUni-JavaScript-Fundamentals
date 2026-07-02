// Task: High Jump.
// Description: Simulate Tihomir's high jump training.
// The bar starts 30 cm below the target height.
// Tihomir has up to 3 attempts at each height.
// If the jump is higher than the bar, raise the bar by 5 cm.
// After 3 failed attempts at the same height, print failure.
// If the target height is cleared, print success.

function highJump(input) {
    let target = Number(input[0]);
    let bar = target - 30;
    let jumps = 0;

    let index = 1;

    while (bar <= target) {
        let success = false;

        for (let attempt = 1; attempt <= 3; attempt++) {
            let jump = Number(input[index++]);

            jumps++;

            if (jump > bar) {
                success = true;
                break;
            }
        }

        if (success) {
            if (bar === target) {
                console.log(`Tihomir succeeded, he jumped over ${bar}cm after ${jumps} jumps.`);
                return;
            }

            bar += 5;

        } else {
            console.log(`Tihomir failed at ${bar}cm after ${jumps} jumps.`);
            return;
        }
    }
}
highJump(["231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235"]);
highJump(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"]);