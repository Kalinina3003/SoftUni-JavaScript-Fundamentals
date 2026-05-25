// Task: 03. Vacation (While Loop)
// Description: Help Jessie calculate if she can save enough money for her trip.
// Jessie either saves or spends a portion of her money each day.

function vacation(input) {
    let index = 0;
    let costOfTour = Number(input[index++]);
    let affordableMoney = Number(input[index++]);

    let days = 0;
    let spendDays = 0;

    while (affordableMoney < costOfTour) {
        let action = input[index++];
        let money = Number(input[index++]);

        days++;

        if (action === 'spend') {
            affordableMoney -= money;
            if (affordableMoney < 0) {
                affordableMoney = 0;
            }
            spendDays++;
        } else {
            affordableMoney += money;
            spendDays = 0;
        }

        if (spendDays === 5) {
            console.log(`You can't save the money.`);
            console.log(`${days}`);
            return;
        }
    }

    console.log(`You saved the money for ${days} days.`);
}
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]);
