// Task: Bitcoin Mining
// Description: Calculate the total bitcoins purchased with mined gold from an array of daily yields.
// Note: 30% of the gold is stolen every third day. Track the day the first bitcoin is bought.

function bitcoinMining(input) {
    let bitcoinCount = 0;
    let day = 1;
    let totalMoney = 0;
    let firstBitcoinDay = 0;

    let bitcoinPrice = 11949.16;
    let gramOfGold = 67.51;

    let index = 0;

    while (index < input.length) {
        let gold = input[index];

        if (day % 3 === 0) {
            gold *= 0.7;
        }

        let moneyForDay = gold * gramOfGold;
        totalMoney += moneyForDay;

        while (totalMoney >= bitcoinPrice) {
            bitcoinCount++;
            if (bitcoinCount === 1) {
                firstBitcoinDay = day;
            }

            totalMoney -= bitcoinPrice;
        }

        day++;
        index++;
    }

    console.log(`Bought bitcoins: ${bitcoinCount}`);

    if (bitcoinCount >= 1) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }

    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);