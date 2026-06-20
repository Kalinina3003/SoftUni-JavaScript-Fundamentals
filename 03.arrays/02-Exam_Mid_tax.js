// Task: Car Taxes.
// Description: Receive a list of vehicles with type, years in use,
// and kilometers traveled.
// Calculate the tax based on the vehicle type,
// years of usage, and traveled kilometers.
// Skip invalid vehicle types.
// Print the tax for each valid vehicle and the total tax collected.

function taxCalculator(arr) {
    let command = arr[0].split('>>');
    let totalSum = 0;

    for (let info of command) {
        let [type, years, kilometers] = info.split(' ');

        years = Number(years);
        kilometers = Number(kilometers);

        let tax = 0;

        if (type === 'family') {
            tax = 50 - (years * 5) + Math.floor(kilometers / 3000) * 12;
        } else if (type === 'heavyDuty') {
            tax = 80 - (years * 8) + Math.floor(kilometers / 9000) * 14;
        } else if (type === 'sports') {
            tax = 100 - (years * 9) + Math.floor(kilometers / 2000) * 18;
        } else {
            console.log(`Invalid car type.`);
            continue;
        }

        totalSum += tax;

        console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
    }

    console.log(`The National Revenue Agency will collect ${totalSum.toFixed(2)} euros in taxes.`);
}
taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']);
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);

/*
function taxCalculator(arr) {
    let command = arr[0].split('>>');
    let totalSum = 0;

    for (let info of command) {
        let [type, years, kilometers] = info.split(' ');

        years = Number(years);
        kilometers = Number(kilometers);

        let tax = 0;

        switch (type) {
            case 'family':
                tax = (50 - years * 5) +
                    Math.floor(kilometers / 3000) * 12;
                break;
            case 'heavyDuty':
                tax = (80 - years * 8) +
                    Math.floor(kilometers / 9000) * 14;
                break;
            case 'sports':
                tax = (100 - years * 9) +
                    Math.floor(kilometers / 2000) * 18;
                break;
            default:
                console.log('Invalid car type.');
                continue;
        }

        totalSum += tax;

        console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
    }

    console.log(`The National Revenue Agency will collect ${totalSum.toFixed(2)} euros in taxes.`);
}
*/