// Task: Create a Laptop class.
// Description: Create a Laptop class with info, isOn, quality and price properties.
// Initialize the laptop with info and quality.
// Add methods to turn the laptop on and off and decrease its quality by 1.
// Add a method that returns the laptop info as JSON.
// Add a getter that calculates the laptop price based on its age and quality.

class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.isOn = false;
        this.quality = quality;
    }

    turnOn() {
        this.isOn = true;
        this.quality--;
    }

    turnOff() {
        this.isOn = false;
        this.quality--;
    }

    showInfo() {
        return JSON.stringify(this.info);
    }

    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5);
    }
}
let info = {producer: "Dell", age: 2, brand: "XPS"};
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);

// let info = {producer: "Lenovo", age: 1, brand: "Legion"};
// let laptop = new Laptop(info, 10);
// laptop.turnOn();
// console.log(laptop.showInfo());
// laptop.turnOff();
// laptop.turnOn();
// laptop.turnOff();
// console.log(laptop.isOn);