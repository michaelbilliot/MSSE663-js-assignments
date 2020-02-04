import { expect } from 'chai';
import 'mocha';

import { MyObservable } from "./observable"

var observe = new MyObservable('When you come to a fork in the road, take it');
describe('Observable mapping test', function () {
    it('Should return the number of words in the string', function () {
        const expectedValue: number = 11;
        let value: number;
        observe.quoteStream.subscribe(
            count => value = count,
            () => expect(value).to.equal(expectedValue)
        );
    });
});