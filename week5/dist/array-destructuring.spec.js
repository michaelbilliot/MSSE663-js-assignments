"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const array_destructuring_1 = require("./array-destructuring");
describe('Array destructuring tests', () => {
    it('#1 should have a variable for every element in the given array', () => {
        chai_1.expect(array_destructuring_1.a).to.equal('banana');
        chai_1.expect(array_destructuring_1.b).to.equal('apple');
    });
    it('#2 should have a variable for the first 2 elements then spread the rest', () => { });
    chai_1.expect(array_destructuring_1.aa).to.equal('apple');
    chai_1.expect(array_destructuring_1.bb).to.equal('banana');
    chai_1.expect(array_destructuring_1.others).to.eql(['chocolate', 'pears', 'oats', 'pizza']);
    it('#3 should construct a statement from the given objarrayect', () => {
        chai_1.expect(array_destructuring_1.hello).to.equal('hello, taylor!');
    });
});
