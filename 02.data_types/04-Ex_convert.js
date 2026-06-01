// Task: Meters to Kilometers and Miles
// Description: Convert a distance from meters to kilometers, 
// then convert kilometers to miles and print the results.

function convertDistance(meters) {
    let kilometers = meters / 1000;
    let miles = kilometers *  0.621371;

    console.log(`${meters} meters is equal to ${kilometers} kilometers.`);
    console.log(`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`);
}
convertDistance(1852);
convertDistance(798);