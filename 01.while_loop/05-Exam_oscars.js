// Task: Oscars
// Description: Calculate the actor's total points.
// Stop when points exceed 1250.5, otherwise print the missing points.

function oscars(arr) {
    let index = 0;
    let nameActor = arr[index++];
    let initialPoints = Number(arr[index++]);
    let numOfJudges = Number(arr[index++]);

    const maxPoints = 1250.5;
    let totalPoints = initialPoints;
    let count = 0;

    while (count < numOfJudges) {
        let nameJudge = arr[index++];
        let points = Number(arr[index++]);

        let currentPoints = (nameJudge.length * points) / 2;

        totalPoints += currentPoints;

        if (totalPoints > maxPoints) {
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;
        }

        count++;
    }

    console.log(`Sorry, ${nameActor} you need ${(maxPoints - totalPoints).toFixed(1)} more!`);
}
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"]);
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);
