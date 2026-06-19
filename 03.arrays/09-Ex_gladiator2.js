// Task: Gladiator Inventory.
// Description: Manage Peter's inventory by executing commands.
// Commands:
// - Buy -> add equipment if it does not exist
// - Trash -> remove equipment if it exists
// - Repair -> move equipment to the end of the inventory
// - Upgrade -> insert an upgrade after the equipment
// Print the final inventory separated by spaces.

function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');

    for (let command of arr) {
        let tokens = command.split(' ');
        let action = tokens[0];
        let item = tokens[1];

        if (action === 'Buy') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (action === 'Trash') {
            let index = inventory.indexOf(item);

            if (index !== -1) {
                inventory.splice(index, 1);
            }
        } else if (action === 'Repair') {
            let index = inventory.indexOf(item);

            if (index !== -1) {
                inventory.splice(index, 1);
                inventory.push(item);
            }
        } else if (action === 'Upgrade') {
            let [equipment, upgrade] = item.split('-');

            let index = inventory.indexOf(equipment);

            if (index !== -1) {
                inventory.splice(index + 1, 0, `${equipment}:${upgrade}`);
            }
        }
    }

    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);