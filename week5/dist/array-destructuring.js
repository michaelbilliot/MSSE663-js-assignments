"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #1 Variable swapping
exports.fruits = ['apple', 'banana'];
// Currently, I would get the following:
//console.log(a); // 'apple'
//console.log(b); // 'banana'
// deconstruct here
exports.a = exports.fruits[1];
exports.b = exports.fruits[0];
// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(exports.a); // 'banana';
console.log(exports.b); // 'apple';
// #2 Variables and Rest
exports.food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];
// deconstruct here
const aa = exports.food[0];
const bb = exports.food[1];
exports.others = [aa, bb, ...exports.food];
// expected result:
console.log(exports.a); // 'apple'
console.log(exports.b); // 'banana'
console.log(exports.others); // ['chocolate, 'pears', 'oats', 'pizza']
// #3 Array: Contruct a statement
['hello', 'taylor'];
// construct statement here
// expected result: 'hello, taylor!'
