// Task: Name Game.
// Description: Read player names until "Stop".
// For each player, read one number for every letter in the name.
// If the number matches the ASCII code of the current letter,
// the player receives 10 points, otherwise receives 2 points.
// Find the player with the highest score.
// If two players have equal points,
// the player who reached the score later wins.

function nameGame(input) {
    let index = 0;

    let winner = '';
    let maxPoints = 0;

    while (input[index] !== 'Stop') {
        let name = input[index++];
        let points = 0;

        for (let letter of name) {
            let number = Number(input[index++]);

            if (number === letter.charCodeAt(0)) {
                points += 10;
            } else {
                points += 2;
            }
        }

        if (points >= maxPoints) {
            maxPoints = points;
            winner = name;
        }
    }
    
    console.log(`The winner is ${winner} with ${maxPoints} points!`);
}
nameGame(["Ivan",
    "73",
    "20",
    "98",
    "110",
    "Ivo",
    "80",
    "65",
    "87",
    "Stop"]);
nameGame(["Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"]);

/*
function nameGame(arr) {
    let index = 0;

    let winner = '';
    let maxPoints = 0;

    while (arr[index] !== 'Stop') {
        let name = arr[index++];
        let sumPoints = 0;

        for (let i = 0; i < name.length; i++) {
            let letter = name[i];

            let numbers = arr[index++];

            let asciiNumbers = String.fromCharCode(numbers);

            if (letter === asciiNumbers) {
                sumPoints += 10;
            } else {
                sumPoints += 2;
            }
        }

        if (maxPoints <= sumPoints) {
            maxPoints = sumPoints;
            winner = name;
        } 
    }

    console.log(`The winner is ${winner} with ${maxPoints} points!`);
}
*/
