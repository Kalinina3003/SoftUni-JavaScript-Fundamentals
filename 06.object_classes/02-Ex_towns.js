// Task: Parse Town Data.
// Description: Receive an array of strings representing table rows.
// Create an object with town, latitude, and longitude for each row.
// Format latitude and longitude to two decimal places.
// Print each object.

function towns(arr) {
    for (let townStr of arr) {
        let [name, latitude, longitude] = townStr.split(' | ');
        latitude = Number(latitude);
        longitude = Number(longitude);

        let townObj = {
            town: name,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        };

        console.log(townObj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);