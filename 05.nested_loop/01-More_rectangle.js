// Task: Draw a Rectangle.
// Description: Print a 10 x 10 rectangle made of '*' characters.
// - the outer loop prints 10 rows;
// - the inner loop prints 10 stars per row.

function rectangleOfTenXTenStars() {
    for (let row = 1; row <= 10; row++) {
        let line = '';

        for (let col = 1; col <= 10; col++) {
            line += '*';
        }
        
        console.log(line);
    }
}
rectangleOfTenXTenStars();