// Task: Tennis Ranklist
// Description: Track tournament results, add ranking points,
// calculate average earned points and percentage of tournaments won.

function tennisRanklist(arr) {
    let numOfTournaments = Number(arr[0]);
    let startPoints = Number(arr[1]);

    let totalPoints = startPoints;
    let wonTournaments = 0;

    let index = 2;

    while (index < numOfTournaments + 2) {
        let result = arr[index];

        if (result === 'W') {
            totalPoints += 2000;
            wonTournaments++;
        } else if (result === 'F') {
            totalPoints += 1200;
        } else if (result === 'SF') {
            totalPoints += 720;
        }

        index++;
    }

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor((totalPoints - startPoints) / numOfTournaments)}`);
    console.log(`${((wonTournaments / numOfTournaments) * 100).toFixed(2)}%`);
}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
