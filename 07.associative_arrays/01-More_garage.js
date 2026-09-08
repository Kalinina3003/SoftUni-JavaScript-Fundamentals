// Task: Store Cars in Garages
// Description: Store cars in garages using associative arrays.
// Create garages if they do not exist, store each car with its information,
// and print all garages and their cars in the required format.

function garage(arr) {
    let garages = {};

    for (let line of arr) {
        let [garageNumber, carInfo] = line.split(' - ');

        if (!garages[garageNumber]) {
            garages[garageNumber] = [];
        }

        let car = {};

        let properties = carInfo.split(', ');

        for (let property of properties) {
            let [key, value] = property.split(': ');

            car[key] = value;
        }

        garages[garageNumber].push(car);
    }

    for (let garageNumber in garages) {
        console.log(`Garage № ${garageNumber}`);

        for (let car of garages[garageNumber]) {
            let carInfo = [];

            for (let key in car) {
                carInfo.push(`${key} - ${car[key]}`);
            }

            console.log(`--- ${carInfo.join(', ')}`);
        }
    }
}
garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']);