// Task: The Pyramid of King Djoser
// Description: Calculate the required resources for each pyramid step 
// and the final pyramid height.

function thePyramidOfKingDjoser(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapisLazuli = 0;
    let step = 0;

    while (base > 2) {
        step++;

        let area = base * base * increment;

        let stone = (base - 2) * (base - 2) * increment;
        totalStone += stone;

        let decoration = area - stone;
  
        if (step % 5 === 0) {
            totalLapisLazuli += decoration;
        } else {
            totalMarble += decoration;
        }

        base -= 2;
    }

    let gold = base * base * increment;
    let height = (step + 1) * increment;

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}
thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);

/*
function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let laisLazuli = 0;
    let gold = 0;
    let step = 1; 

    while (base > 2) {
        let stoneStage = (base - 2) * (base - 2); 
        stone += stoneStage * increment;

        if (step % 5 === 0) {   
            let laisLazuliStage = (base * base) - stoneStage;
            laisLazuli += laisLazuliStage * increment;
        } else {
            let marbleStage = (base * base) - stoneStage;
            marble += marbleStage * increment;
        }

        base -= 2; 
        step++;     
    }

    gold = base * base * increment; 

    let height = step * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(laisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}
*/
