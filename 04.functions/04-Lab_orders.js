// Task: Orders
// Description: Calculate the total price of a product order and print the result.

function orders(products, quantity) {
    let price = 0;
    switch (products) {
        case 'coffee':
            price = 1.50;
            break;
        case 'water':
            price = 1.00;
            break;
        case 'coke':
            price = 1.40;
            break;
        case 'snacks':
            price = 2.00;
            break;
    }

    let result = price * quantity;

    return result.toFixed(2);
}
console.log(orders("water", 5));
console.log(orders("coffee", 2));