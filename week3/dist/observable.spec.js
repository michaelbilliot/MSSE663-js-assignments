"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const observable_1 = require("./observable");
var observe = new observable_1.MyObservable('When you come to a fork in the road, take it');
describe('Observable mapping test', function () {
    it('Should return the number of words in the string', function () {
        const expectedValue = 11;
        let value;
        observe.quoteStream.subscribe(count => value = count, () => chai_1.expect(value).to.equal(expectedValue));
    });
});
