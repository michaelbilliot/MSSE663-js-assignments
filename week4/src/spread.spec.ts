import { expect } from 'chai';
import 'mocha';
import { originalNumbers, copyNumbers, originalContenders, allContenders, originalPersons, people, originalUpdates, updatedData, modifiedRunnerUps } from './spread';

describe('Array Copy Test', function () {
    it('Should be that both arrays are equal', function () {
        expect(originalNumbers).to.eql(copyNumbers);
    });
});

describe('Combining two arrays test', function () {
    it('Should be that both arrays are equal', function () {
        expect(modifiedRunnerUps).to.eql(allContenders);
    });
});

describe('Combining object test', function () {
    it('Should be that both arrays of objects are equal', function () {
        expect(originalPersons).to.eql(people);
    });
});

describe('Modifying values in an Array of Objects Test', function () {
    it('Should be that both arrays of objects are equal', function () {
        expect(originalUpdates).to.eql(updatedData);
    });
});
