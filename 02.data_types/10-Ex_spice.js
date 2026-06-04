// Task: Spice Must Flow
// Description: Calculate how many days a spice mine operates and the total amount of spice collected.
// The mine works while the daily yield is at least 100, decreases by 10 each day, and workers consume 26 spice
// at the end of each working day and once more after closing.

function spiceMustFlow(startingYield) {
    let totalSpices = 0;
    let days = 0;
    let yieldPerDay = startingYield;

    while (yieldPerDay >= 100) {
        days++;

        totalSpices += yieldPerDay;
        totalSpices -= 26; 
        yieldPerDay -= 10;  
    }

    if (totalSpices >= 26) {
        totalSpices -= 26;
    }

    console.log(days);
    console.log(totalSpices);
}
spiceMustFlow(111);
spiceMustFlow(450);