"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #1 Convert this javascript function to a curried function
function curryMe(string1, string2, string3) {
    return string1 + ' ' + string2 + ' ' + string3;
}
exports.curryMe = curryMe;
// source code here
exports.convertedFunction = (string1) => (string2) => (string3) => string1 + ' ' + string2 + ' ' + string3;
// #2 Hoist and convert nested functions to curried functions
function doMath(a) {
    return function add(b) {
        return function subtract(c) {
            return a + b - c;
        };
    };
}
exports.doMath = doMath;
// source code here
const substraction = (a) => (b) => (c) => a + b - c;
const addition = (a) => (b) => (c) => substraction(a)(b)(c);
exports.performMath = (a) => addition(a);
const ninjasOne = [
    { name: 'Michelangelo', belt: 'white' },
    { name: 'Donatello', belt: 'green' },
    { name: 'Raphael', belt: 'black' },
    { name: 'Leonardo', belt: 'black' },
    { name: 'Mr. Miyagi', belt: 'black' },
    { name: 'Rocky', belt: 'black' },
    { name: 'Colt', belt: 'green' },
    { name: 'Tum Tum', belt: 'white' },
    { name: 'Haru', belt: 'white' },
    { name: 'The Bride', belt: 'black' },
    { name: 'Cammy', belt: 'black' },
    { name: 'Wong Fei-hung', belt: 'green' }
];
const ninjasTwo = [
    { name: 'Michelangelo', belt: 'white' },
    { name: 'Donatello', belt: 'green' },
    { name: 'Raphael', belt: 'black' },
    { name: 'Jim', belt: 'black' },
    { name: 'The Rat', belt: 'black' }
];
// source code here
const allNinjas = [...ninjasOne, ...ninjasTwo];
exports.blackBeltNinjas = allNinjas.filter((ninja) => {
    return ninja.belt === 'black';
});
console.log(allNinjas);
const statusTypes = {
    white: 'grasshopper',
    green: 'warrior',
    black: 'sensei'
};
const gamerStatusTypes = {
    white: 'Noob',
    green: 'Choob',
    black: 'Legend'
};
// source code here
exports.ninjaWithStatus = ninjasOne.map((ninja) => {
    return Object.assign(Object.assign({}, ninja), { status: statusTypes[ninja.belt] });
});
exports.ninjaGamerStatus = ninjasTwo.map((ninja) => {
    return Object.assign(Object.assign({}, ninja), { status: gamerStatusTypes[ninja.belt] });
});
