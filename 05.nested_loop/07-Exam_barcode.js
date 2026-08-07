// Task: Barcode Generator.
// Description: Read the start and end barcode.
// Generate all four-digit barcodes in the given range.
// Each digit must be within the corresponding digit range.
// Print only the barcodes that contain odd digits only.

function barcodeGenerator(start, end) {
    let firstStart = Number(String(start)[0]);
    let secondStart = Number(String(start)[1]);
    let thirdStart = Number(String(start)[2]);
    let fourthStart = Number(String(start)[3]);

    let firstEnd = Number(String(end)[0]);
    let secondEnd = Number(String(end)[1]);
    let thirdEnd = Number(String(end)[2]);
    let fourthEnd = Number(String(end)[3]);

    let result = '';

    for (let a = firstStart; a <= firstEnd; a++) {
        for (let b = secondStart; b <= secondEnd; b++) {
            for (let c = thirdStart; c <= thirdEnd; c++) {
                for (let d = fourthStart; d <= fourthEnd; d++) {

                    if (
                        a % 2 !== 0 &&
                        b % 2 !== 0 &&
                        c % 2 !== 0 &&
                        d % 2 !== 0
                    ) {
                        result += `${a}${b}${c}${d} `;
                    }
                }
            }

        }
    }

    console.log(result);
}
barcodeGenerator(2345, 6789);
barcodeGenerator(3256, 6579);

/*
function barcodeGenerator(start, end) {
    let result = '';

    let startStr = String(start);
    let endStr = String(end);

    let numStart1 = Number(startStr[0]);
    let numEnd1 = Number(endStr[0]);

    let numStart2 = Number(startStr[1]);
    let numEnd2 = Number(endStr[1]);

    let numStart3 = Number(startStr[2]);
    let numEnd3 = Number(endStr[2]);

    let numStart4 = Number(startStr[3]);
    let numEnd4 = Number(endStr[3]);

    for (let i = numStart1; i <= numEnd1; i++) {
        for (let j = numStart2; j <= numEnd2; j++) {
            for (let x = numStart3; x <= numEnd3; x++) {
                for (let y = numStart4; y <= numEnd4; y++) {

                    if (i % 2 === 0 ||
                        j % 2 === 0 ||
                        x % 2 === 0 ||
                        y % 2 === 0
                    ) {
                        continue;
                    }

                    result += `${i}${j}${x}${y} `;
                }
            }
        }
    }

    console.log(result.trim());
}
*/
