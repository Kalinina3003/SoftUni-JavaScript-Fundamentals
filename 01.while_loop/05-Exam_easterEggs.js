// Task: Easter Eggs
// Description: Count eggs by color and print 
// the color with the highest number of eggs.

function easterEggs(arr) {
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;

    let numOfEggs = Number(arr[0]);
    let index = 1;

    while (index < numOfEggs + 1) {
        let color = arr[index++];

        if (color === 'red') {
            red++;
        } else if (color === 'orange') {
            orange++;
        } else if (color === 'blue') {
            blue++;
        } else if (color === 'green') {
            green++;
        }
    }

    let maxEggs = Math.max(red, orange, blue, green);
    let maxColor = '';

    if (maxEggs === red) {
        maxColor = 'red';
    } else if (maxEggs === orange) {
        maxColor = 'orange';
    } else if (maxEggs === blue) {
        maxColor = 'blue'
    } else if (maxEggs === green) {
        maxColor = 'green'
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxEggs} -> ${maxColor}`);
}
easterEggs(["7",
    "orange",
    "blue",
    "green",
    "green",
    "blue",
    "red",
    "green"]);
