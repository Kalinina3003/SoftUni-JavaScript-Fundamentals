// Task: Store Resources.
// Description: Receive an array containing resource names and quantities.
// Collect the total quantity for each resource.
// Print each resource and its total quantity.
// Output format: "{resource} -> {quantity}".

function aMinerTask(arr) {
    let resourceQtys = {};

    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let qty = Number(arr[i + 1]);

        if (resource in resourceQtys) {
            resourceQtys[resource] += qty;
        } else {
            resourceQtys[resource] = qty;
        }
    }

    let entries = Object.entries(resourceQtys);

    for (let [resource, qty] of entries) {
        console.log(`${resource} -> ${qty}`);
    }
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);