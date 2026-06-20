// Task: Experience Gaining.
// Description: Receive the needed experience and the number of battles.
// For each battle, collect experience and apply bonuses or penalties:
// +15% on every 3rd battle, -10% on every 5th battle,
// and +5% on every 15th battle.
// Stop as soon as the required experience is reached.
// Print whether the player successfully unlocked the tank.

function experienceGaining(arr) {
    let maxPoints = arr[0];
    let countOfBattles = arr[1];

    let totalPoints = 0;
    let battle = 0;

    let index = 2;

    while (index <= countOfBattles + 1) {
        let points = arr[index];

        battle++;

        if (battle % 3 === 0) {
            points *= 1.15;
        }

        if (battle % 5 === 0) {
            points *= 0.90;
        }

        if (battle % 15 === 0) {
            points *= 1.05;
        }

        totalPoints += points;

        if (totalPoints >= maxPoints) {
            console.log(`Player successfully collected his needed experience for ${battle} battles.`);
            return;
        }

        index++;
    }

    console.log(`Player was not able to collect the needed experience, ${(maxPoints - totalPoints).toFixed(2)} more needed.`);
}
experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    20]);
experienceGaining([400,
    5,
    50,
    100,
    200,
    100,
    20]);
/*
function experienceGaining(arr) {
    let maxPoints = arr[0];
    let countOfBattles = arr[1];

    let totalPoints = 0;

    for (let battle = 1; battle <= countOfBattles; battle++) {
        let points = arr[battle + 1];

        if (battle % 3 === 0) points *= 1.15;
        if (battle % 5 === 0) points *= 0.90;
        if (battle % 15 === 0) points *= 1.05;

        totalPoints += points;

        if (totalPoints >= maxPoints) {
            console.log(`Player successfully collected his needed experience for ${battle} battles.`);
            return;
        }
    }

    console.log(`Player was not able to collect the needed experience, ${(maxPoints - totalPoints).toFixed(2)} more needed.`);
}
    */