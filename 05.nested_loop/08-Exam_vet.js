// Task: Calculate Parking Cost.
// Description: Calculate the parking fee for each day.
// Use nested loops to iterate through days and hours.
// Apply the parking rates based on the day and hour.
// Print the daily total and the overall parking cost.

function vetParking(days, hours) {
    let total = 0;

    for (let day = 1; day <= days; day++) {
        let totalDay = 0;

        for (let hour = 1; hour <= hours; hour++) {
            let price = 1;

            if (day % 2 === 0 && hour % 2 !== 0) {
                price = 2.50;
            } else if (day % 2 !== 0 && hour % 2 === 0) {
                price = 1.25;
            }

            totalDay += price;
        }

        total += totalDay;
        console.log(`Day: ${day} - ${totalDay.toFixed(2)} leva`);
    }

    console.log(`Total: ${total.toFixed(2)} leva`);
}
vetParking(2, 5);
vetParking(5, 2);