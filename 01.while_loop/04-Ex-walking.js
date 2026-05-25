// Task: 04. Walking (While Loop)
// Description: Track Gabi's daily steps until she reaches her goal of 10,000 steps 
// or until she decides to go home by typing the "Going home" command.

function walking(input) {
    let target = 10000;
    let totalSteps = 0;
    let index = 0;

    while (totalSteps < target) {
        let data = input[index++];

        if (data === 'Going home') {
            let currentStep = Number(input[index++]);
            totalSteps += currentStep;
            break;
        }

        let steps = Number(data);
        totalSteps += steps;
    }

    if (target > totalSteps) {
        console.log(`${target - totalSteps} more steps to reach goal.`);
    } else {
        console.log('Goal reached! Good job!');
        console.log(`${totalSteps - target} steps over the goal!`);
    }
}
walking(["1000",
    "1500",
    "2000",
    "6500"]);
