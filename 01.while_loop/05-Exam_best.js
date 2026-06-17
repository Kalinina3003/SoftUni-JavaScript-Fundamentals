// Task: Best Player.
// Description: Read player name and goals scored until "END".
// Find the player with the most goals. If a player scores 10 or more goals, stop reading input immediately.
// After the loop: Print the best player's name.
// If the best player scored 3 or more goals, print that he made a hat-trick. Otherwise print only the number of goals scored.

function bestPlayer(input) {
    let index = 0;
    let bestPlayer = '';
    let maxGoals = 0;

    while (input[index] !== 'END') {
        let namePlayer = input[index++];
        let goals = Number(input[index++]);

        if (goals > maxGoals) {
            maxGoals = goals;
            bestPlayer = namePlayer;
        }

        if (goals >= 10) {
            break;
        }
    }

    console.log(`${bestPlayer} is the best player!`);

    if (maxGoals >= 3) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
}
bestPlayer(["Neymar",
    "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"]);
bestPlayer(["Silva",
    "5",
    "Harry Kane",
    "10"]);
bestPlayer(["Petrov",
    "2",
    "Drogba",
    "11"]);
