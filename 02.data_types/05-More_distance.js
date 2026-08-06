// Task: Distance Between Points
// Description: Receive the x and y coordinates of two points,
// calculate the distance between them, and return the result.

function distanceBetweenPoints(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    let distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);

    return distance;
}
console.log(distanceBetweenPoints(2, 4, 5, 0));
console.log(distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985));