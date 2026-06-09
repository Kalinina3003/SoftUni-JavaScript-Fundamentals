// Task: Dungeonest Dark
// Description: Go through dungeon rooms, manage health and coins, 
// fight monsters, and survive until the end.

function dungeonestDark(str) {
    let health = 100;
    let totalCoins = 0;
    let currentRoom = 1;

    let rooms = str.split('|');

    for (let room of rooms) {
        let [command, value] = room.split(' ');
        value = Number(value);

        if (command === 'potion') {
            let healthAdded = value;

            if (health + healthAdded > 100) {
                healthAdded = 100 - health;
            }
            health += healthAdded;
            console.log(`You healed for ${healthAdded} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            let coins = value;
            totalCoins += coins;
            console.log(`You found ${coins} coins.`);
        } else {
            let monsterName = command;
            let monsterAttack = value;
            health -= monsterAttack;

            if (health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${currentRoom}`);
                return;
            }
        }
        currentRoom++;
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${totalCoins}`);
    console.log(`Health: ${health}`);

}
dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");