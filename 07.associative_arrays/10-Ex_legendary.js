// Task: Legendary Farming.
// Description: Receive lines with quantities and material names.
// Collect key materials (shards, fragments, motes) and junk separately.
// The first key material to reach 250 obtains its legendary item.
// Subtract 250 from the obtained material.
// Print the obtained legendary item.
// Sort key materials by quantity (descending), then by name.
// Sort junk materials alphabetically.
// Print all remaining materials and their quantities.

function legendaryFarming(str) {
    let keyMaterialQtys = { motes: 0, fragments: 0, shards: 0 };
    let junkMaterialQtys = {};
    let materialLegendaries = { motes: 'Dragonwrath', fragments: 'Valanyr', shards: 'Shadowmourne' };

    let infoEls = str.split(' ');

    for (let i = 0; i < infoEls.length; i += 2) {
        let qty = Number(infoEls[i]);
        let material = infoEls[i + 1].toLowerCase();

        if (material in keyMaterialQtys) {
            keyMaterialQtys[material] += qty;

            if (keyMaterialQtys[material] >= 250) {
                console.log(`${materialLegendaries[material]} obtained!`);
                keyMaterialQtys[material] -= 250;
                break;
            }
        } else {
            if (material in junkMaterialQtys) {
                junkMaterialQtys[material] += qty;
            } else {
                junkMaterialQtys[material] = qty;
            }
        }
    }

    let keyMaterialEntries = Object.entries(keyMaterialQtys)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    let junkMaterialEntries = Object.entries(junkMaterialQtys)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [material, qty] of keyMaterialEntries) {
        console.log(`${material}: ${qty}`);
    }

    for (let [material, qty] of junkMaterialEntries) {
        console.log(`${material}: ${qty}`);
    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');