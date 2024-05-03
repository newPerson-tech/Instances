class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = null;
    }

    setOwner(human) {
        if (human.age > 18) {
            this.owner = human;
        } else {
            console.log("You must be over 18 yo to be allowed to drive");
        }
    }

    printInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Number plate: ${this.licensePlate}`);
        if (this.owner) {
            console.log("Owner:");
            this.owner.printInfo();
        } else {
            console.log("Owner is not set");
        }
    }
}

const human1 = new Human("Mark", 30);
const human2 = new Human("Teresa", 17);
const human3 = new Human("Andrew", 25);

const car1 = new Car("Toyota", "Corolla", 2018, "AA1234BC");
const car2 = new Car("Honda", "Civic", 2020, "BB5678CD");


car1.setOwner(human1);
car2.setOwner(human2);

console.log(car1.printInfo());
console.log(car2.printInfo());
