// Task: Fitness Center
// Description: Count training activities and protein purchases,
// then calculate the percentage of visitors in each group.

function fitnessCenter(arr) {
    let index = 0;
    let people = Number(arr[index++]);

    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let shake = 0;
    let bar = 0;

    while (index < people + 1) {
        let data = arr[index];

        if (data === 'Back') {
            back++;
        } else if (data === 'Chest') {
            chest++;
        } else if (data === 'Legs') {
            legs++;
        } else if (data === 'Abs') {
            abs++;
        } else if (data === 'Protein shake') {
            shake++;
        } else if (data === 'Protein bar') {
            bar++;
        }

        index++;
    }
    let train = back + chest + legs + abs;
    let food = shake + bar;

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${shake} - protein shake`);
    console.log(`${bar} - protein bar`);
    console.log(`${((train / people) * 100).toFixed(2)}% - work out`);
    console.log(`${((food / people) * 100).toFixed(2)}% - protein`);
}
fitnessCenter(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"]);
fitnessCenter(["7",
    "Chest",
    "Back",
    "Legs",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar"]);