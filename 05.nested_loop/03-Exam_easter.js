// Task: Easter Competition.
// Description: Read the number of Easter breads.
// For each baker, read his name and all received scores until "Stop".
// Calculate the total points for each baker.
// After each baker, print his total points and announce if he becomes the new leader.
// At the end, print the winner and his total points.

function easterCompetition(input) {
    let index = 0;

    let winner = '';
    let maxPoints = 0;

    let count = Number(input[index++]);

    for (let i = 0; i < count; i++) {
        let baker = input[index++];
        let points = 0;

        let command = input[index++];

        while (command !== 'Stop') {
            points += Number(command);

            command = input[index++];
        }

        console.log(`${baker} has ${points} points.`);

        if (points > maxPoints) {
            maxPoints = points;
            winner = baker;

            console.log(`${baker} is the new number 1!`);
        }
    }

    console.log(`${winner} won competition with ${maxPoints} points!`);
}
easterCompetition(["3",
    "Chef Manchev", 
    "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"]);
easterCompetition(["2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"]);

/*
function easterCompetition(arr) {
    let index = 0;

    let count = 0;
    let totalPoints = 0;
    let winnersName = '';
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let numOfKozunaks = Number(arr[index++]);

    while (count < numOfKozunaks) {
        let bakersName = arr[index++];

        count++;
        totalPoints = 0;

        while (arr[index] !== 'Stop') {
            let points = Number(arr[index++]);

            totalPoints += points;
        }

        console.log(`${bakersName} has ${totalPoints} points.`);

        if (maxPoints < totalPoints) {
            maxPoints = totalPoints;
            winnersName = bakersName;
            
            console.log(`${bakersName} is the new number 1!`);
        }

        index++;
    }

    console.log(`${winnersName} won competition with ${maxPoints} points!`);
}
*/
