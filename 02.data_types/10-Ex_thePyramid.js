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