// Task: Parking Lot.
// Description: Receive an array of parking records.
// Add a car number when a car enters the parking lot.
// Remove a car number when a car leaves the parking lot.
// Sort the remaining car numbers in ascending order.
// Print all cars in the parking lot or "Parking Lot is Empty".

function piccolo(arr) {
    let parkedCars = new Set();

    for (let carInfoStr of arr) {
        let [direction, number] = carInfoStr.split(', ');

        if (direction === 'IN') {
            parkedCars.add(number);
        } else {
            parkedCars.delete(number);
        }
    }

    if (parkedCars.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let parkedCarsArr = Array.from(parkedCars).sort((a, b) => a.localeCompare(b));
        console.log(parkedCarsArr.join('\n'));
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);