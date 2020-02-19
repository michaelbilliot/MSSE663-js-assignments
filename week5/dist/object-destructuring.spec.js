"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const object_destructuring_1 = require("./object-destructuring");
describe('Object destructuring tests', () => {
    it('#1 should have a variable for every property in the given object', () => {
        chai_1.expect(object_destructuring_1.person).to.equal('elvis');
        chai_1.expect(object_destructuring_1.job).to.equal('hip shaker');
    });
    it('#2 should have a variable for every property in the given nested object', () => {
        chai_1.expect(object_destructuring_1.user).to.equal('elvis');
        chai_1.expect(object_destructuring_1.address).to.equal({ city: 'denver', state: 'colorado' });
        chai_1.expect(object_destructuring_1.id).to.equal(1);
    });
    it('#3 should create a new object given the destructed variables from the nested object', () => { });
    it('#4 should construct a statement from the given object', () => { });
});
