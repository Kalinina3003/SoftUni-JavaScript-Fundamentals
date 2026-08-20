// Task: Radio Crystals.
// Description: Reduce each crystal chunk to the target thickness
// using the minimum number of operations and wash after each batch.

function radioCrystals(arr) {
    let target = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let thickness = arr[i];

        console.log(`Processing chunk ${thickness} microns`);

        let cutCount = 0;

        while (thickness / 4 >= target) {
            thickness /= 4;
            cutCount++;
        }

        if (cutCount > 0) {
            console.log(`Cut x${cutCount}`);
            thickness = Math.floor(thickness);
            console.log('Transporting and washing');
        }

        let lapCount = 0;

        while (thickness * 0.8 >= target) {
            thickness *= 0.8;
            lapCount++;
        }

        if (lapCount > 0) {
            console.log(`Lap x${lapCount}`);
            thickness = Math.floor(thickness);
            console.log('Transporting and washing');
        }

        let grindCount = 0;

        while (thickness - 20 >= target) {
            thickness -= 20;
            grindCount++;
        }

        if (grindCount > 0) {
            console.log(`Grind x${grindCount}`);
            thickness = Math.floor(thickness);
            console.log('Transporting and washing');
        }

        let etchCount = 0;

        while (thickness - 2 >= target - 1) {
            thickness -= 2;
            etchCount++;
        }

        if (etchCount > 0) {
            console.log(`Etch x${etchCount}`);
            thickness = Math.floor(thickness);
            console.log('Transporting and washing');
        }

        if (thickness < target) {
            thickness++;
            console.log('X-ray x1');
        }

        console.log(`Finished crystal ${thickness} microns`);
    }
}
radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);