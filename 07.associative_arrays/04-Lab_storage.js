// Task: Storage.
// Description: Receive an array of items and quantities.
// Store each item and its quantity.
// Add the quantity if the item already exists.
// Print all items and their total quantities.

function storage(arr) {
    let map = new Map();

    for (let data of arr) {
        let [item, quantity] = data.split(' ');
        quantity = Number(quantity);

        if (map.has(item)) {
            let currentQuantity = map.get(item);

            let updateQuantity = currentQuantity + quantity;
            map.set(item, updateQuantity);
        } else {
            map.set(item, quantity);
        }
    }

    for (let [key, value] of map.entries()) {
        console.log(`${key} -> ${value}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
);