// Task: Suitcases Load
// Description: Receive trunk capacity. Read suitcase volumes until "End".
// Every third suitcase increases its volume by 10%. Stop if there is not enough space.
// Print the result and the number of loaded suitcases.

function suitcasesLoad(arr) {
    let index = 0;
    let spaceInTrunk = Number(arr[index++]);

    let numSuitcases = 0;
    let count = 0;

    while (true) {
        let command = arr[index++];

        if (command === 'End') {
            console.log('Congratulations! All suitcases are loaded!');
            break;
        }

        let suitcase = Number(command);
        count++;

        if (count % 3 === 0) {
            suitcase *= 1.10;
        }

        if (spaceInTrunk < suitcase) {
            console.log('No more space!');
            break;
        }

        spaceInTrunk -= suitcase;
        numSuitcases++;
    }

    console.log(`Statistic: ${numSuitcases} suitcases loaded.`);
}
suitcasesLoad(["550",
    "100",
    "252",
    "72",
    "End"]);
suitcasesLoad(["700.5",
    "180",
    "340.6",
    "126",
    "220"]);
suitcasesLoad(["1200.2",
    "260",
    "380.5",
    "125.6",
    "305",
    "End"]);