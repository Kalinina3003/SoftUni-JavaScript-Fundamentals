// Task: Store Hero Information.
// Description: Receive an array of hero records.
// Create a hero object with name, level, and items.
// Sort all heroes by level.
// Print each hero's information in the required format.

function inventory(arr) {
    let heroes = [];

    for (let heroStr of arr) {
        let [heroName, heroLevel, heroItems] = heroStr.split(' / ');
        heroLevel = Number(heroLevel);

        let heroObj = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        heroes.push(heroObj);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let heroObj of heroes) {
        console.log(`Hero: ${heroObj.name}`);
        console.log(`level => ${heroObj.level}`);
        console.log(`items => ${heroObj.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);