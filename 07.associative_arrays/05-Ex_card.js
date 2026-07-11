// Task: Card Game.
// Description: Receive a list of players and their cards.
// Store all unique cards for each player.
// Ignore duplicate cards.
// Calculate the total value of each player's hand.
// Print each player's name and total score.

function cardGame(arr) {
    let players = {};

    const power = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    };

    const type = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1,
    };

    for (let line of arr) {
        let [name, cards] = line.split(': ');
        cards = cards.split(', ');

        if (!players[name]) {
            players[name] = new Set();
        }

        for (let card of cards) {
            players[name].add(card);
        }
    }

    for (let player in players) {
        let total = 0;

        for (let card of players[player]) {
            let cardPower = card.slice(0, -1);
            let cardType = card.slice(-1);

            total += power[cardPower] * type[cardType];
        }

        console.log(`${player}: ${total}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);