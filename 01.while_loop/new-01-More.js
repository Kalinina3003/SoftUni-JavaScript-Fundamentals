// Task: Dishwasher
// Description: Calculate whether the detergent is enough to wash dishes and pots. 
// Every third load contains only pots.

function dishwasher(input) {
    let numOfBottles = Number(input[0]);
    let index = 1;

    let mlInBottle = 750;
    let mlOnePlate = 5;
    let mlOnePan = 15;

    let numOfPlate = 0;
    let numOfPan = 0;
    let time = 0;

    let allDetergent = numOfBottles * mlInBottle;

    while (allDetergent >= 0) {
        let command = input[index++];

        if (command === 'End') {
            console.log('Detergent was enough!');
            console.log(`${numOfPlate} dishes and ${numOfPan} pots were washed.`);
            console.log(`Leftover detergent ${allDetergent} ml.`);
            return;
        }

        time++;

        let dishesCount = Number(command);

        if (time % 3 === 0) {
            allDetergent -= dishesCount * mlOnePan;
            numOfPan += dishesCount;
        } else {
            allDetergent -= dishesCount * mlOnePlate;
            numOfPlate += dishesCount;
        }
    }

    console.log(`Not enough detergent, ${Math.abs(allDetergent)} ml. more necessary!`);
}
dishwasher(["2", "53", "65", "55", "End"]);
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);