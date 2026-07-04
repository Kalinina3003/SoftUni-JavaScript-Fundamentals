// Task: Tournament of Christmas.
// Description: Read the number of tournament days.
// For each day, read sports until "Finish".
// For every sport, read the result ("win" or "lose").
// Each win earns 20 leva.
// If wins are more than losses for the day,
// increase the day's money by 10%.
// If winning days are more than losing days,
// increase the total money by 20%.
// Print whether the tournament was won or lost.

function tournamentOfChristmas(input) {
    let index = 0;

    let days = Number(input[index++]);

    let totalMoney = 0;
    let winningDays = 0;
    let losingDays = 0;

    for (let day = 0; day < days; day++) {
        let dayMoney = 0;
        let wins = 0;
        let losses = 0;

        while (true) {
            let sport = input[index++];

            if (sport === 'Finish') {
                break;
            }

            let result = input[index++];

            if (result === 'win') {
                wins++;
                dayMoney += 20;
            } else {
                losses++;
            }
        }

        if (wins > losses) {
            dayMoney *= 1.10;
            winningDays++;
        } else {
            losingDays++;
        }

        totalMoney += dayMoney;
    }

    if (winningDays > losingDays) {
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
tournamentOfChristmas(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"]);
tournamentOfChristmas(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"]);