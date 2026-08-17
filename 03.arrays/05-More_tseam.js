// Task: Manage Tseam Account
// Description: Modify the games array according to the given commands.

function tseamAccount(arr) {
    let games = arr[0].split(' ');

    for (let i = 1; i < arr.length; i++) {
        let command = arr[i];

        if (command === 'Play!') {
            break;
        }

        let [action, game] = command.split(' ');

        if (action === 'Install') {
            if (!games.includes(game)) {
                games.push(game);
            }
        } else if (action === 'Uninstall') {
            let index = games.indexOf(game);

            if (index !== -1) {
                games.splice(index, 1);
            }
        } else if (action === 'Update') {
            let index = games.indexOf(game);

            if (index !== -1) {
                games.splice(index, 1);
                games.push(game);
            }
        } else if (action === 'Expansion') {
            let [gameName, expansion] = game.split('-');
            let index = games.indexOf(gameName);

            if (index !== -1) {
                games.splice(index + 1, 0, `${gameName}:${expansion}`);
            }
        }
    }

    console.log(games.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']);