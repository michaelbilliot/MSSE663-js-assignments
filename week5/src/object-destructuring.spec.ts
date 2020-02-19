import { expect } from 'chai';
import 'mocha';
import { person, job, user, address, id, nestedObject, anotherObject, hello } from './object-destructuring';

describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () => {
    expect(person).to.equal('elvis');
    expect(job).to.equal('hip swinger');
  });

  it('#2 should have a variable for every property in the given nested object', () => {
    expect(user).to.equal('elvis');
    expect(address).to.eql({ city: 'denver', state: 'colorado' });
    expect(id).to.equal(1);
  });

  it('#3 should create a new object given the destructed variables from the nested object', () => {
    expect(nestedObject).to.eql(anotherObject);
  });

  it('#4 should construct a statement from the given object', () => {
    expect(hello).to.equal('hello, taylor!');
  });
});
