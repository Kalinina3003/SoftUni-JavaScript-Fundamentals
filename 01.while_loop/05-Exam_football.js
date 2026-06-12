// Task: Football Tournament.
// Description: Count wins, draws, losses, and total points.
// Print team statistics and win rate.
// If no matches were played, print a special message.

function footballTournament(input) {
    let index = 0;
    let teamName = input[index++];
    let numOfMatches = Number(input[index++]);

    if (numOfMatches === 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
        return;
    }

    let points = 0;
    let totalPoints = 0;
    let resultW = 0;
    let resultD = 0;
    let resultL = 0;
    let count = 0;

    while (count < numOfMatches) {
        let result = input[index++];

        if (result === 'W') {
            points = 3;
            totalPoints += points;
            resultW++;
        } else if (result === 'D') {
            points = 1;
            totalPoints += points;
            resultD++;
        } else if (result === 'L') {
            resultL++;
        }

        count++;
    }

    console.log(`${teamName} has won ${totalPoints} points during this season.`);
    console.log('Total stats:');
    console.log(`## W: ${resultW}`);
    console.log(`## D: ${resultD}`);
    console.log(`## L: ${resultL}`);
    console.log(`Win rate: ${((resultW / numOfMatches) * 100).toFixed(2)}%`);
}
footballTournament(["Chelsea", "0"]);
footballTournament(["Barcelona",
    "7",
    "W",
    "D",
    "L",
    "L",
    "W",
    "W",
    "D"]);
