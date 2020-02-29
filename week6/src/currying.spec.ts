import { expect } from 'chai';
import 'mocha';
import { convertedFunction, curryMe, doMath, performMath, blackBeltNinjas, ninjaWithStatus, ninjaGamerStatus } from './currying';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    expect(convertedFunction('hello')('world')('michael')).to.equal(curryMe('hello', 'world', 'michael'));
  });

  it('#2 should output the same result as the original function', () => {
    expect(performMath(6)(4)(2)).to.equal(doMath(6)(4)(2));
  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {
    expect(blackBeltNinjas).to.eql([ { name: 'Raphael', belt: 'black' },
                                { name: 'Leonardo', belt: 'black' },
                                { name: 'Mr. Miyagi', belt: 'black' },
                                { name: 'Rocky', belt: 'black' },
                                { name: 'The Bride', belt: 'black' },
                                { name: 'Cammy', belt: 'black' },
                                { name: 'Raphael', belt: 'black' },
                                { name: 'Jim', belt: 'black' },
                                { name: 'The Rat', belt: 'black' } ]);
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    expect(ninjaWithStatus).to.eql([  { name: 'Michelangelo', belt: 'white', status: 'grasshopper' },
                                      { name: 'Donatello', belt: 'green', status: 'warrior' },
                                      { name: 'Raphael', belt: 'black', status: 'sensei' },
                                      { name: 'Leonardo', belt: 'black', status: 'sensei' },
                                      { name: 'Mr. Miyagi', belt: 'black', status: 'sensei' },
                                      { name: 'Rocky', belt: 'black', status: 'sensei' },
                                      { name: 'Colt', belt: 'green', status: 'warrior' },
                                      { name: 'Tum Tum', belt: 'white', status: 'grasshopper' },
                                      { name: 'Haru', belt: 'white', status: 'grasshopper' },
                                      { name: 'The Bride', belt: 'black', status: 'sensei' },
                                      { name: 'Cammy', belt: 'black', status: 'sensei' },
                                      { name: 'Wong Fei-hung', belt: 'green', status: 'warrior' } ]);

    expect(ninjaGamerStatus).to.eql([ { name: 'Michelangelo', belt: 'white', status: 'Noob' },
                                      { name: 'Donatello', belt: 'green', status: 'Choob' },
                                      { name: 'Raphael', belt: 'black', status: 'Legend' },
                                      { name: 'Jim', belt: 'black', status: 'Legend' },
                                      { name: 'The Rat', belt: 'black', status: 'Legend' } ])
  });
});
