// Task: Easter Decoration.
// Description: Read the number of clients.
// For each client, read purchased products until "Finish".
// Calculate the total bill and the number of purchased items.
// If the client bought an even number of items, apply a 20% discount.
// Print each client's bill.
// After all clients finish shopping, print the average bill per client.

function easterDecoration(input) {
    let index = 0;

    let clients = Number(input[index++]);
    let totalMoney = 0;

    for (let i = 0; i < clients; i++) {
        let bill = 0;
        let items = 0;

        while (input[index] !== 'Finish') {
            let product = input[index++];

            items++;

            switch (product) {
                case 'basket':
                    bill += 1.50;
                    break;
                case 'wreath':
                    bill += 3.80;
                    break;
                case 'chocolate bunny':
                    bill += 7;
                    break;
            }
        }

        index++;

        if (items % 2 === 0) {
            bill *= 0.8;
        }

        totalMoney += bill;

        console.log(`You purchased ${items} items for ${bill.toFixed(2)} leva.`);
    }
    
    console.log(`Average bill per client is: ${(totalMoney / clients).toFixed(2)} leva.`);
}
easterDecoration(["2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"]);
easterDecoration(["1",
    "basket",
    "wreath",
    "chocolate bunny",
    "wreath",
    "basket",
    "chocolate bunny",
    "Finish"]);