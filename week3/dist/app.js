"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coffee {
    constructor(description, sizeInOunces) {
        this.basePrice = 7.50;
        this.formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });
        this.description = description;
        this.sizeInOunces = sizeInOunces;
    }
    getDescription() {
        return this.description;
    }
    getBeverages(numberOfBeverages) {
        let beverages = [];
        for (let i = 0; i < numberOfBeverages; i++) {
            beverages[i] = new Coffee(this.getDescription(), 12);
        }
        return beverages;
    }
    getCost() {
        return this.formatter.format(this.basePrice * (this.sizeInOunces / 10));
    }
    allowFreeRefills() {
        return this.description === "Coffee";
    }
}
exports.Coffee = Coffee;
let cupOfCoffee = new Coffee("Coffee", 15);
console.log(`Type : ${cupOfCoffee.getDescription()}, Size : ${cupOfCoffee.sizeInOunces} ounce, Cost : ${cupOfCoffee.getCost()}`);
console.log(cupOfCoffee.allowFreeRefills() ? 'Free Refills' : 'No Free Refills');
cupOfCoffee = new Coffee("Mocha", 15);
console.log(`Type : ${cupOfCoffee.getDescription()}, Size : ${cupOfCoffee.sizeInOunces} ounce, Cost : ${cupOfCoffee.getCost()}`);
console.log(cupOfCoffee.allowFreeRefills() ? 'Free Refills' : 'No Free Refills');
let coffeeMaker = new Coffee("De-Cafe", 12);
let cupsOfCoffee = coffeeMaker.getBeverages(4);
for (let cup of cupsOfCoffee) {
    console.log(`Type : ${cup.getDescription()}, Size : ${cup.sizeInOunces} ounce, Cost : ${cup.getCost()}`);
    console.log(cup.allowFreeRefills() ? 'Free Refills' : 'No Free Refills');
}
