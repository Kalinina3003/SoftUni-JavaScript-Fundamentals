// Task: Group Discount.
// Description: Calculate the total price based on the group size,
// type, and day, applying the appropriate discount.
// Print the total price formatted to the second decimal point.

function vacation(groupSize, groupType, day) {
    let price = 0;

    switch (day) {
        case 'Friday':
            if (groupType === 'Students') {
                price = 8.45;
            } else if (groupType === 'Business') {
                price = 10.90;
            } else if (groupType === 'Regular') {
                price = 15.00;
            }
            break;
        case 'Saturday':
            if (groupType === 'Students') {
                price = 9.80;
            } else if (groupType === 'Business') {
                price = 15.60;
            } else if (groupType === 'Regular') {
                price = 20.00;
            }
            break;
        case 'Sunday':
            if (groupType === 'Students') {
                price = 10.46;
            } else if (groupType === 'Business') {
                price = 16.00;
            } else if (groupType === 'Regular') {
                price = 22.50;
            }
            break;
    }

    let totalPrice = groupSize * price;

    if (groupType === 'Students' && groupSize >= 30) {
        totalPrice *= 0.85;
    } else if (groupType === 'Business' && groupSize >= 100) {
        totalPrice -= price * 10;
    } else if (groupType === 'Regular' && (groupSize >= 10 && groupSize <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday");
vacation(40,
    "Regular",
    "Saturday");