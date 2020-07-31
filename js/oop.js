class Vehicle {
    constructor(plat, merk, roda, kapasitas) {
        this.plat = plat
        this.merk = merk
        this.roda = roda
        this._kapasitas = kapasitas
    }

    info() {
        console.log(`Kendaraan dengan plat ${this.plat} sudah dibuat oleh  ${this.merk} memiliki kapasitas mesin ${this._kapasitas}.`);
    }

    nyalakanMesin() {
        console.log(`Mesin kendaraan berplat ${this.plat} berhasil dinyalakan !`);
    }

    type() {
        console.log(`kendaraan ini ber roda ${this.roda} dari merk ${this.merk}.`);
    }

    // Getter and setter 
    get kapasitas() {
        return this._kapasitas
    }

    set kapasitas(kapasitas) {
        this._kapasitas = kapasitas
    }


}

class Car extends Vehicle {
    constructor(plat, merk, roda, kapasitas, tipe) {
        super(plat, merk, roda, kapasitas)
        this.tipe = tipe
    }

    detail() {
        console.log(`Kendaraan ini bertipe ${this.tipe} dengan ${this.kapasitas}.`);
    }
}

// Membuat instansi ferrari dari class Car
const ferrari = new Car('D234J', 'Ferrari', 4, '5000 CC', 'Sport')
const avanza = new Car('A234Z', 'Toyota', 4, '1500 CC', 'MVP')

ferrari.detail()
ferrari.info()
ferrari.type()

// Membuat static method
class PabrikMobil {
    static repair(vehicle) {
        vehicle.forEach(vehicle => {
            console.log(`Kendaraan dengan plat ${vehicle.plat} dengan tipe ${vehicle.tipe} sedang diperbaiki.`);
        })
    }
}

PabrikMobil.repair([ferrari, avanza])