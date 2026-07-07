// Task: Create a Product Catalogue.
// Description: Receive a list of products and their prices.
// Sort the products alphabetically.
// Group the products by the first letter of their names.
// Print each group and its products in the required format.

function catalogue(input) {
    let catalog = {};

    for (let productInfo of input) {
        let [product, price] = productInfo.split(' : ');

        catalog[product] = Number(price);
    }

    let sortedProducts = Object.keys(catalog).sort((a, b) => a.localeCompare(b));

    let currentLetter = '';

    for (let product of sortedProducts) {
        if (product[0] !== currentLetter) {
            currentLetter = product[0];
            console.log(currentLetter);
        }

        console.log(` ${product}: ${catalog[product]}`);
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);