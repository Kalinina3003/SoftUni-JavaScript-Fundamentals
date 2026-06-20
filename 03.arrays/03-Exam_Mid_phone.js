// Task: Phone Shop.
// Description: Receive an initial list of phones.
// Process commands to add, remove, insert bonus phones,
// or move phones to the end of the list.
// Continue until the "End" command is received.
// Print the final phone storage separated by commas.

function phoneShop(arr) {
    let mobiles = arr.shift().split(', ');

    let command = arr.shift();

    while (command !== 'End') {
        let [action, phone] = command.split(' - ');

        if (action === 'Add') {
            if (!mobiles.includes(phone)) {
                mobiles.push(phone);
            }
        } else if (action === 'Remove') {
            let index = mobiles.indexOf(phone);

            if (index !== -1) {
                mobiles.splice(index, 1);
            }
        } else if (action === 'Bonus phone') {
            let [oldMobile, newMobile] = phone.split(':');

            let index = mobiles.indexOf(oldMobile);

            if (index !== -1) {
                mobiles.splice(index + 1, 0, newMobile);
            }
        } else if (action === 'Last') {
            let index = mobiles.indexOf(phone);

            if (index !== -1) {
                mobiles.splice(index, 1);
                mobiles.push(phone);
            }
        }

        command = arr.shift();
    }

    console.log(mobiles.join(', '));
}
phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"]);
phoneShop(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"]);
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"]);

/*
function phoneShop(arr) {
    let mobiles = arr.shift().split(', ');

    for (let command of arr) {

        if (command === 'End') {
            break;
        }
        let [action, phone] = command.split(' - ');

        if (action === 'Add') {
            if (!mobiles.includes(phone)) {
                mobiles.push(phone);
            }
        } else if (action === 'Remove') {
            let index = mobiles.indexOf(phone);

            if (index !== -1) {
                mobiles.splice(index, 1);
            }
        } else if (action === 'Bonus phone') {
            let [oldMobile, newMobile] = phone.split(':');

            let index = mobiles.indexOf(oldMobile);

            if (index !== -1) {
                mobiles.splice(index + 1, 0, newMobile);
            }
        } else if (action === 'Last') {
            let index = mobiles.indexOf(phone);

            if (index !== -1) {
                mobiles.splice(index, 1);
                mobiles.push(phone);
            }
        }
    }

    console.log(mobiles.join(', '));
}
 */
