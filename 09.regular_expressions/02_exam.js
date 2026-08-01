// Task: Boss Rush.
// Description: Validate boss names and titles.
// Check if each input follows the required format.
// Extract the boss name and title if the input is valid.
// Print the boss information along with the name and title lengths.
// Otherwise, print "Access denied!".

function bossRush(arr) {
    let count = Number(arr.shift());

    let pattern = /^\|([A-Z]{4,})\|:#([A-Za-z]+ [A-Za-z]+)#$/;

    for (let i = 0; i < count; i++) {
        let line = arr.shift();

        let fit = line.match(pattern);

        if (fit) {
            let bossName = fit[1];
            let title = fit[2];

            console.log(`${bossName}, The ${title}`);
            console.log(`>> Strength: ${bossName.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log('Access denied!');
        }
    }
}
bossRush(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#']);
bossRush(['3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#']);