"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const spread_1 = require("./spread");
describe('Array Copy Test', function () {
    it('Should be that both arrays are equal', function () {
        chai_1.expect(spread_1.originalNumbers).to.eql(spread_1.copyNumbers);
    });
});
describe('Combining two arrays test', function () {
    it('Should be that both arrays are equal', function () {
        chai_1.expect(spread_1.modifiedRunnerUps).to.eql(spread_1.allContenders);
    });
});
describe('Combining object test', function () {
    it('Should be that both arrays of objects are equal', function () {
        chai_1.expect(spread_1.originalPersons).to.eql(spread_1.people);
    });
});
describe('Modifying values in an Array of Objects Test', function () {
    it('Should be that both arrays of objects are equal', function () {
        chai_1.expect(spread_1.originalUpdates).to.eql(spread_1.updatedData);
    });
});
