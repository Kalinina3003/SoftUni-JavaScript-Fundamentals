// Task: Furniture Purchase.
// Description: Read furniture purchases until "Purchase".
// Validate input with regex, extract furniture name, price, and quantity.
// Calculate the total cost and print all valid furniture names with the final amount spent.

function furniture(arr) {
    let pattern = />>(?<name>[A-Z][A-Za-z]*)<<(?<price>\d+(\.\d+)?)!(?<qty>\d+)/;

    let command = arr.shift();
    let furniture = [];
    let totalPrice = 0;

    while (command !== 'Purchase') {
        let furnitureMatch = command.match(pattern);

        if (furnitureMatch) {
            let name = furnitureMatch.groups.name;
            let price = Number(furnitureMatch.groups.price);
            let qty = Number(furnitureMatch.groups.qty);

            furniture.push(name);
            totalPrice += qty * price;
        }
        command = arr.shift();
    }

    console.log('Bought furniture:');

    if (furniture.length > 0) {
        console.log(furniture.join('\n'));
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);