// Task: SoftUni Bar Income.
// Description: Read orders until "end of shift".
// Validate each order using a regular expression.
// Extract the customer name, product, quantity, and price.
// Print the total price for every valid order.
// At the end, print the total income for the day.

function softUniBarIncome(arr) {
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/;
    let totalIncome = 0;

    for (let line of arr) {
        if (line === 'end of shift') {
            break;
        }

        let match = line.match(pattern);

        if (!match) {
            continue;
        }

        let customer = match.groups.customer;
        let product = match.groups.product;
        let count = Number(match.groups.count);
        let price = Number(match.groups.price);

        let totalPrice = count * price;
        totalIncome += totalPrice;

        console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);