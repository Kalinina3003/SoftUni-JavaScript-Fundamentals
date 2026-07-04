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