// Task: Cone Volume and Surface Area
// Description: Calculate the cone's volume and 
// total surface area by radius and height.

function cone(radius, height) {
    let volume = (1 / 3) * Math.PI * radius ** 2 * height;

    let slantHeight = Math.sqrt(radius ** 2 + height ** 2);

    let surfaceArea = Math.PI * radius * (radius + slantHeight);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}
cone(3, 5);
cone(3.3, 7.8);