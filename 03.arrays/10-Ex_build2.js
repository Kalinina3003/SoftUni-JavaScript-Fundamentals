// Task: Build a Wall.
// Description: Receive the initial height of wall sections.
// Each day, every unfinished section grows by 1 foot.
// Track the concrete used each day until all sections reach 30 feet.
// Print the daily concrete usage and the total cost in pesos.

function buildAWall(input) {
    let wall = input.map(Number);
    let dailyConcrete = [];

    while (wall.some(height => height < 30)) {
        let crewsWorking = wall.filter(height => height < 30).length;

        for (let i = 0; i < wall.length; i++) {
            if (wall[i] < 30) {
                wall[i]++;
            }
        }

        dailyConcrete.push(crewsWorking * 195);
    }

    let totalConcrete = dailyConcrete.reduce((sum, concrete) => sum + concrete, 0);
    let totalCost = totalConcrete * 1900;

    console.log(dailyConcrete.join(', '));
    console.log(`${totalCost} pesos`);
}
buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);