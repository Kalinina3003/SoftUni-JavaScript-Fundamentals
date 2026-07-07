// Task: Create a Vehicle Class.
// Description: Create a Vehicle class.
// Initialize type, model, parts, and fuel in the constructor.
// Store engine, power, and calculated quality in the parts object.
// Create a drive() method that reduces the vehicle's fuel.

class Vehicle {
    constructor(type, model, parts, fuel) {
        parts.quality = parts.engine * parts.power;
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
    };

    drive(fuelLoss) {
        this.fuel -= fuelLoss
    }
}
let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);