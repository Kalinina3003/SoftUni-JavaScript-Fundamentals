// Task: Moving (While Loop);
// Description: Calculate the remaining free space in an apartment while boxes are being moved in.

function moving(input) {
    let index = 0;
    let width = Number(input[index++]);
    let length = Number(input[index++]);
    let height = Number(input[index++]);

    let freeSpace = width * length * height;

    while (freeSpace > 0) {
        let data = input[index++];

        if (data === 'Done') {
            console.log(`${freeSpace} Cubic meters left.`);
            return;
        }

        let boxes = Number(data);
        freeSpace -= boxes;
    }

    console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);
