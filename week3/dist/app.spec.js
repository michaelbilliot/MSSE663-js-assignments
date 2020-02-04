"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const app_1 = require("./app");
let coffee = new app_1.Coffee("Coffee", 15);
describe('Beverage description test', function () {
    it('Should return the description of the beverage', function () {
        chai_1.expect(coffee.getDescription()).to.equal('Coffee');
    });
});
describe('Beverage cost test', function () {
    it('Should return a base price', function () {
        chai_1.expect(coffee.basePrice).to.equal(7.5);
    });
    it('Should return the cost of the beverage', function () {
        chai_1.expect(coffee.getCost()).to.equal('$11.25');
    });
});
describe('Beverage size test', function () {
    it('Should return the size in ounces of the beverage', function () {
        chai_1.expect(coffee.sizeInOunces).to.equal(15);
    });
});
describe('Beverage refill test', function () {
    it('Should return the beverage refill availability', function () {
        chai_1.expect(coffee.allowFreeRefills()).to.be.true;
        let mocha = new app_1.Coffee("Mocha", 12);
        chai_1.expect(mocha.allowFreeRefills()).to.be.false;
    });
});
describe('Beverages array test', function () {
    let cupOfCoffee = coffee.getBeverages(4);
    it('Should return the number of beverages requested', function () {
        chai_1.expect(cupOfCoffee.length).to.equal(4);
    });
    it('Should have the same description for each element', function () {
        cupOfCoffee.forEach(element => {
            chai_1.expect(element.getDescription()).to.equal('Coffee');
        });
    });
});
