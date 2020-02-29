import { expect } from 'chai';
import 'mocha';
import { things2, aThing } from './higher-order-funcs';

describe('Higher Order Function tests', () => {
  it("#1 should produce the expected result `[{ id: 1, name 'thing' }, { id: 2, name 'thing' }]` after hoisting", () => {
    expect(things2).to.eql([ { id: 0, name: 'thing1' }, { id: 1, name: 'thing2' } ]);
  });
  it('#2 should return a single thing from array of things objects after hoisting and currying', () => {
    expect(aThing).to.eql([ { id: 0, name: 'thing1' } ]);
  });
});
