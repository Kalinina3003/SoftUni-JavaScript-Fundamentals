// Task: Easter Bake
// Description: Calculate the required sugar and flour packages 
// and find the maximum sugar 
// and flour used for a single Easter bread.

function easterBake(arr) {
    let onePacketOfSugar = 950;
    let onePacketOfFlour = 750;

    let index = 0;
    let count = 0;
    let numOfKozunak = Number(arr[index++]);

    let totalSugar = 0;
    let totalFlour = 0;

    let maxSugar = 0;
    let maxFlour = 0;

    while (count < numOfKozunak) {
        let sugar = Number(arr[index++]);
        let flour = Number(arr[index++]);

        if (sugar > maxSugar) {
            maxSugar = sugar;
        }

        if (flour > maxFlour) {
            maxFlour = flour;
        }

        totalSugar += sugar;
        totalFlour += flour;

        count++;
    }
    let packetsOfSugar = totalSugar / onePacketOfSugar;
    let packetsOfFlour = totalFlour / onePacketOfFlour;

    console.log(`Sugar: ${Math.ceil(packetsOfSugar)}`);
    console.log(`Flour: ${Math.ceil(packetsOfFlour)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}
easterBake(["4",
    "500",
    "350",
    "560",
    "430",
    "600",
    "345",
    "578",
    "543"]);
