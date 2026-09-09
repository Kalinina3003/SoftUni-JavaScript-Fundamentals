// Task: Army Leader
// Description: Store army leaders and their armies using associative arrays.
// Add leaders and armies, increase army counts, remove defeated leaders,
// calculate total army counts, and print leaders and their armies sorted by count.

function armies(arr) {
    let leaders = {};

    for (let command of arr) {
        if (command.endsWith(' arrives')) {
            let leader = command.replace(' arrives', '');

            leaders[leader] = {};
        } else if (command.endsWith(' defeated')) {
            let leader = command.replace(' defeated', '');

            delete leaders[leader];
        } else if (command.includes(' + ')) {
            let [army, count] = command.split(' + ');

            count = Number(count);

            for (let leader in leaders) {
                if (leaders[leader][army] !== undefined) {
                    leaders[leader][army] += count;
                }
            }
        } else if (command.includes(': ')) {
            let [leader, armyInfo] = command.split(': ');
            let [army, count] = armyInfo.split(', ');

            count = Number(count);

            if (leaders[leader] !== undefined) {
                leaders[leader][army] = count;
            }
        }
    }

    function getTotalArmies(armies) {
        let total = 0;

        for (let army in armies) {
            total += armies[army];
        }

        return total;
    }

    let leaderEntries = Object.entries(leaders);

    leaderEntries.sort((a, b) => {
        return getTotalArmies(b[1]) - getTotalArmies(a[1]);
    });

    for (let [leader, armies] of leaderEntries) {
        let total = getTotalArmies(armies);
        console.log(`${leader}: ${total}`);

        let armyEntries = Object.entries(armies);

        armyEntries.sort((a, b) => b[1] - a[1]);

        for (let [army, count] of armyEntries) {
            console.log(`>>> ${army} - ${count}`);
        }
    }
}
armies(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']);
armies(['Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423']);