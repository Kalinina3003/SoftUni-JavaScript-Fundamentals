// Task: Basketball Tournament.
// Description: Process multiple basketball tournaments.
// Read tournament names until "End of tournaments".
// For each tournament, read the number of games.
// Compare Desi's team score with the opponent's score for every game.
// Print whether each game is won or lost and by how many points.
// At the end, print the percentage of won and lost games.

function basketballTournament(input) {
    let index = 0;

    let tournament = input[index++];
    let wins = 0;
    let losses = 0;

    while (tournament !== 'End of tournaments') {
        let games = Number(input[index++]);

        for (let game = 1; game <= games; game++) {
            let desiScore = Number(input[index++]);
            let opponentScore = Number(input[index++]);

            if (desiScore > opponentScore) {
                wins++;
                console.log(`Game ${game} of tournament ${tournament}: win with ${desiScore - opponentScore} points.`);
            } else {
                losses++;
                console.log(`Game ${game} of tournament ${tournament}: lost with ${opponentScore - desiScore} points.`);
            }
        }

        tournament = input[index++];
    }

    let totalGames = wins + losses;

    console.log(`${((wins / totalGames) * 100).toFixed(2)}% matches win`);
    console.log(`${((losses / totalGames) * 100).toFixed(2)}% matches lost`);
}
basketballTournament(["Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"]);
basketballTournament(["Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments"]);