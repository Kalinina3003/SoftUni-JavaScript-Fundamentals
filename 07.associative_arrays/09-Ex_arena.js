// Task: Arena Tier.
// Description: Receive a list of gladiator commands.
// Store each gladiator with their techniques and skills.
// Update a technique only if the new skill is higher.
// Process duels between gladiators with a common technique.
// Remove the gladiator with the lower total skill.
// Sort gladiators by total skill (descending), then by name.
// Sort techniques by skill (descending), then by name.
// Print the remaining gladiators and their techniques.

function arenaTier(input) {
    let gladiators = {};

    for (let line of input) {
        if (line === 'Ave Cesar') {
            break;
        }

        if (line.includes(' -> ')) {
            let [gladiator, technique, skill] = line.split(' -> ');
            skill = Number(skill);

            if (!gladiators[gladiator]) {
                gladiators[gladiator] = {};
            }

            if (!gladiators[gladiator][technique] ||
                gladiators[gladiator][technique] < skill) {
                gladiators[gladiator][technique] = skill;
            }
        } else {
            let [firstGladiator, secondGladiator] = line.split(' vs ');

            if (!gladiators[firstGladiator] || !gladiators[secondGladiator]) {
                continue;
            }

            let firstTechniques = Object.keys(gladiators[firstGladiator]);
            let secondTechniques = Object.keys(gladiators[secondGladiator]);

            for (let technique of firstTechniques) {
                if (secondTechniques.includes(technique)) {

                    let firstTotal = Object.values(gladiators[firstGladiator])
                        .reduce((a, b) => a + b, 0);

                    let secondtTotal = Object.values(gladiators[secondGladiator])
                        .reduce((a, b) => a + b, 0);

                    if (firstTotal > secondtTotal) {
                        delete gladiators[secondGladiator];
                    } else if (secondtTotal > firstTotal) {
                        delete gladiators[firstGladiator];
                    }

                    break;
                }
            }
        }
    }

    let sortedGladiators = Object.entries(gladiators).sort((a, b) => {
        let firstTotal = Object.values(a[1]).reduce((x, y) => x + y, 0);

        let secondtTotal = Object.values(b[1]).reduce((x, y) => x + y, 0);

        return secondtTotal - firstTotal || a[0].localeCompare(b[0]);
    });

    for (let [gladiator, techniques] of sortedGladiators) {
        let totalSkill = Object.values(techniques)
            .reduce((a, b) => a + b, 0);

        console.log(`${gladiator}: ${totalSkill} skill`);

        let sortedTechniques = Object.entries(techniques)
            .sort((a, b) => b[1] - a[1] ||
                a[0].localeCompare(b[0]));

        for (let [technique, skill] of sortedTechniques) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);