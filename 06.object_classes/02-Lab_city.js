// Task: City Information.
// Description: Receive an object.
// Iterate through all keys and values.
// Print each pair as "{key} -> {value}".

function city(data) {
    let keys = Object.keys(data);

    for (let key of keys) {
        let value = data[key];

        console.log(`${key} -> ${value}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});