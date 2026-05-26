// Task: Coins (While Loop)
// Description: Calculate the minimum number of coins needed to return a specific amount of change.
// Available coins: 2 lv, 1 lv, 0.50 lv, 0.20 lv, 0.10 lv, 0.05 lv, 0.02 lv, 0.01 lv.

function coins(money) {
    let cent = Math.round(money * 100); // 123
    let count = 0;

    while (cent !== 0) {
        if (cent >= 200) {
            cent -= 200;
        } else if (cent >= 100) {
            cent -= 100;
        } else if (cent >= 50) {
            cent -= 50;
        } else if (cent >= 20) {
            cent -= 20;
        } else if (cent >= 10) {
            cent -= 10;
        } else if (cent >= 5) {
            cent -= 5;
        } else if (cent >= 2) {
            cent -= 2;
        } else if (cent >= 1) {
            cent -= 1;
        }
        count++;
    }
    console.log(count);
}
coins(1.23);
coins(2);
coins(0.56);
coins(2.73);
