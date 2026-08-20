// Task: Points Validation.
// Description: Receive two points and check if the distances
// to the origin and between the points are integer values.

function pointsValidation(arr) {
    let [x1, y1, x2, y2] = arr;

    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    let firstDistance = calculateDistance(x1, y1, 0, 0);
    let secondDistance = calculateDistance(x2, y2, 0, 0);
    let thirdDistance = calculateDistance(x1, y1, x2, y2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${Number.isInteger(firstDistance) ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${Number.isInteger(secondDistance) ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(thirdDistance) ? 'valid' : 'invalid'}`);
}
pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);