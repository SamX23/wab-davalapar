// Versi jadul
function Car(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActive = false;
}

Car.prototype.startEngines = function () {
    console.log('Mobil dinyalakan...');
    this.enginesActive = true;
};

Car.prototype.info = function () {
    console.log("Manufacture: " + this.manufacture);
    console.log("Color: " + this.color);
    console.log("Engines: " + (this.enginesActive ? "Active" : "Inactive"));
}

var johnCar = new Car("Honda", "Red");
johnCar.startEngines();
johnCar.info();

// es6
class Car {

    // Sama seperti function constructor
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }

    // Sama seperti Car.prototype.startEngine
    startEngines() {
        console.log('Mobil dinyalakan...');
        this.enginesActive = true;
    }

    // Sama seperti car.prototype.info
    info() {
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Color:  ${this.color}`);
        console.log(`Engines: ${this.enginesActive ? "Active" : "Inactive"}`);
    }

}

const johnCar = new Car("Honda", "Red");
johnCar.startEngines();
johnCar.info();