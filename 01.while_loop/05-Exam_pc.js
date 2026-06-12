// Task: PC Game Shop.
// Description: Calculate the percentage of total sales
// for each category and print with 2 decimals.

function pcGameShop(input) {
    let index = 0;
    let soldGames = Number(input[index++]);

    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    while (index < soldGames + 1) {
        let nameOfGame = input[index];

        if (nameOfGame === 'Hearthstone') {
            hearthstone++;
        } else if (nameOfGame === 'Fornite') {
            fornite++;
        } else if (nameOfGame === 'Overwatch') {
            overwatch++;
        } else {
            others++;
        }

        index++;
    }

    console.log(`Hearthstone - ${((hearthstone / soldGames) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((fornite / soldGames) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((overwatch / soldGames) * 100).toFixed(2)}%`);
    console.log(`Others - ${((others / soldGames) * 100).toFixed(2)}%`);
}
pcGameShop(["4",    // [0]
    "Hearthstone",  // [1]
    "Fornite",      // [2]
    "Overwatch",
    "Counter-Strike"]);
pcGameShop(["3",
    "Hearthstone",
    "Diablo 2",
    "Star Craft 2"]);
