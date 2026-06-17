// Task: Numbered Product List
// Description: Receive an array of product names. Sort the products alphabetically.
// Print them with numbering (1, 2, 3, ...).

function listOfNumbers(products) {
    let result = products
        .sort()
        .map((pr, i) => `${i + 1}.${pr}`);

    for (let product of result) {
        console.log(product);
    }
}
listOfNumbers(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfNumbers(['Watermelon', 'Banana', 'Apples']);