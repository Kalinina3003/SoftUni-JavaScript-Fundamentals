// Task: Happy Cat Parking.
// Description: Calculate the parking fee for each day.
// Loop through every day and every hour.
// Price depends on whether the day and hour are even or odd.
// Print the total for each day and the final total.

function happyCatParking(days, hours) {
    let total = 0;

    for (let day = 1; day <= days; day++) {
        let dayTotal = 0;

        for (let hour = 1; hour <= hours; hour++) {
            let price = 1;

            if (day % 2 === 0 && hour % 2 !== 0) {
                price = 2.50;
            } else if (day % 2 !== 0 && hour % 2 === 0) {
                price = 1.25;
            }

            dayTotal += price;
        }

        total += dayTotal;

        console.log(`Day: ${day} - ${dayTotal.toFixed(2)} leva`);
    }

    console.log(`Total: ${total.toFixed(2)} leva`);
}
happyCatParking(2, 5);
happyCatParking(5, 2);