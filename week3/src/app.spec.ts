import { expect } from 'chai';
import 'mocha';
import { Coffee } from './app';

let coffee = new Coffee("Coffee", 15);
describe('Beverage description test', function () {
    it('Should return the description of the beverage', function () {
        expect(coffee.getDescription()).to.equal('Coffee');
    });
});

describe('Beverage cost test', function () {
    it('Should return a base price', function () {
        expect(coffee.basePrice).to.equal(7.5);
    });
    it('Should return the cost of the beverage', function () {
        expect(coffee.getCost()).to.equal('$11.25');
    });
});

describe('Beverage size test', function () {
    it('Should return the size in ounces of the beverage', function () {
        expect(coffee.sizeInOunces).to.equal(15);
    });
});

describe('Beverage refill test', function () {
    it('Should return the beverage refill availability', function () {
        expect(coffee.allowFreeRefills()).to.be.true;
        let mocha = new Coffee("Mocha", 12);
        expect(mocha.allowFreeRefills()).to.be.false;
    });
});

describe('Beverages array test', function () {
    let cupOfCoffee = coffee.getBeverages(4);
    it('Should return the number of beverages requested', function () {
        expect(cupOfCoffee.length).to.equal(4);
    });
    it('Should have the same description for each element', function() {
        cupOfCoffee.forEach(element => {
            expect(element.getDescription()).to.equal('Coffee');
        });
    });
});
