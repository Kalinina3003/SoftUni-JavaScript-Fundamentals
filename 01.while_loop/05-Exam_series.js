// Task: Series
// Description: Apply series discounts and check if the budget is enough.

function series(arr) {
    let index = 0;
    let count = 0;

    let budget = Number(arr[index++]);
    let seriesCount = Number(arr[index++]);

    while (count < seriesCount) {
        let seriesName = arr[index++];
        let seriesPrice = Number(arr[index++]);

        if (seriesName === 'Thrones') {
            seriesPrice *= 0.50;
        } else if (seriesName === 'Lucifer') {
            seriesPrice *= 0.60;
        } else if (seriesName === 'Protector') {
            seriesPrice *= 0.70;
        } else if (seriesName === 'TotalDrama') {
            seriesPrice *= 0.80;
        } else if (seriesName === 'Area') {
            seriesPrice *= 0.90;
        }

        budget -= seriesPrice;
        count++;
    }

    if (budget < 0) {
        console.log(`You need ${Math.abs(budget).toFixed(2)} lv. more to buy the series!`);
    } else {
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`);
    }
}
series(["25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"]);
