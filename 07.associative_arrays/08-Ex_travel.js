// Task: Travel Time.
// Description: Receive an array of travel offers.
// Store each country with its towns and travel costs.
// If a town appears more than once, keep the lowest travel cost.
// Sort countries alphabetically.
// Sort towns in each country by travel cost.
// Print each country followed by its towns and costs.

function travelTime(input) {
    let destinations = {};

    for (let line of input) {
        let [country, town, cost] = line.split(' > ');
        cost = Number(cost);

        if (!destinations[country]) {
            destinations[country] = {};
        }

        if (!destinations[country][town] ||
            destinations[country][town] > cost) {
            destinations[country][town] = cost;
        }
    }

    let sortedCountries = Object.keys(destinations)
        .sort((a, b) => a.localeCompare(b));

    for (let country of sortedCountries) {
        let towns = Object.entries(destinations[country])
            .sort((a, b) => a[1] - b[1]);

        let result = towns
            .map(([town, cost]) => `${town} -> ${cost}`)
            .join(' ');

        console.log(`${country} -> ${result}`);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);