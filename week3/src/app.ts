export interface Beverage {
    basePrice: number;
    description: string;
    sizeInOunces: number;

    getDescription(): string;
    getBeverages(numberOfBeverages: number): Beverage [];
    getCost(): string;
    allowFreeRefills(): boolean;
}

export class Coffee implements Beverage {
    basePrice = 7.50;
    description: string;
    sizeInOunces: number;
    formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    constructor(description: string, sizeInOunces: number) {
        this.description = description;
        this.sizeInOunces = sizeInOunces;
    }

    getDescription(): string {
        return this.description;
    }

    getBeverages(numberOfBeverages: number): Coffee [] {
        let beverages = [];
        for (let i = 0; i < numberOfBeverages; i ++) {
            beverages[i] = new Coffee(this.getDescription(), 12);
        }
        return beverages;
    }

    getCost(): string {
        return this.formatter.format(this.basePrice * (this.sizeInOunces / 10));
    }

    allowFreeRefills() : boolean {
        return this.description === "Coffee";
    }
}

let cupOfCoffee = new Coffee("Coffee", 15);
console.log(`Type : ${cupOfCoffee.getDescription()}, Size : ${cupOfCoffee.sizeInOunces} ounce, Cost : ${cupOfCoffee.getCost()}`)
console.log(cupOfCoffee.allowFreeRefills() ? 'Free Refills' : 'No Free Refills');

cupOfCoffee = new Coffee("Mocha", 15);
console.log(`Type : ${cupOfCoffee.getDescription()}, Size : ${cupOfCoffee.sizeInOunces} ounce, Cost : ${cupOfCoffee.getCost()}`)
console.log(cupOfCoffee.allowFreeRefills() ? 'Free Refills' : 'No Free Refills');

let coffeeMaker = new Coffee("De-Cafe", 12);
let cupsOfCoffee: Coffee [] = coffeeMaker.getBeverages(4);
for (let cup of cupsOfCoffee) {
    console.log(`Type : ${cup.getDescription()}, Size : ${cup.sizeInOunces} ounce, Cost : ${cup.getCost()}`);
    console.log(cup.allowFreeRefills() ? 'Free Refills' : 'No Free Refills');
}
