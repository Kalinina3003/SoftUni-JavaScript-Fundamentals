// Task: Report System
// Description:
// Create a charity payment system that processes product purchases.
// Payments alternate between cash and card transactions.
//
// Rules:
// - Cash payments cannot be over 100.
// - Card payments cannot be below 10.

function reportSystem(input) {
    let index = 0;
    let salesTarget = Number(input[index++]);

    let card = 0;
    let cash = 0;
    let cashCount = 0;
    let cardCount = 0;
    let transaction = 0;
    let totalMoney = 0;

    while (totalMoney < salesTarget) {
        let command = input[index++];

        if (command === 'End') {
            console.log('Failed to collect required money for charity.');
            return;
        }

        let money = Number(command);
        transaction++;

        if (transaction % 2 !== 0) { // cash
            if (money > 100) {
                console.log('Error in transaction!');
                continue;
            }
            cash += money;
            cashCount++;
            console.log('Product sold!');
        } else {                        // card
            if (money < 10) {
                console.log('Error in transaction!');
                continue;
            }
            card += money;
            cardCount++;
            console.log('Product sold!');
        }
        totalMoney += money;
    }
    console.log(`Average CS: ${(cash / cashCount).toFixed(2)}`);
    console.log(`Average CC: ${(card / cardCount).toFixed(2)}`);
}
reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
reportSystem(["600", "86", "150", "98", "227", "End"]);
