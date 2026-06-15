// Task: Care Of Puppy.
// Description: Receive the amount of food in kilograms.
// Read food eaten in grams until "Adopted". Calculate the remaining food.
// Print whether the food is enough or how many grams are needed.

function careOfPuppy(arr) {
    let puppyFoodKg = Number(arr[0]);
    let puppyFoodGr = puppyFoodKg * 1000;

    let command = arr[1];
    let index = 2;

    while (command !== 'Adopted') {
        let foodPerDay = Number(command);

        puppyFoodGr -= foodPerDay;
        command = arr[index++];
    }

    if (puppyFoodGr >= 0) {
        console.log(`Food is enough! Leftovers: ${puppyFoodGr} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(puppyFoodGr)} grams more.`);
    }

}
careOfPuppy(["4", 
    "130",     
    "345",   
    "400",
    "180",
    "230",
    "120",
    "Adopted"]);
careOfPuppy(["3",
    "1000",
    "1000",
    "1000",
    "Adopted"]);
careOfPuppy(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"]);
