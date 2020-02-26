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
exports.aa = exports.food[0], exports.bb = exports.food[1], exports.others = exports.food.slice(2);
// expected result:
console.log(exports.aa); // 'apple'
console.log(exports.bb); // 'banana'
console.log(exports.others); // ['chocolate, 'pears', 'oats', 'pizza']
// #3 Array: Contruct a statement
let words = ['hello', 'taylor'];
let [greeting] = words;
let [, name] = words;
// construct statement here
exports.hello = greeting + `, ` + name + `!`;
// expected result: 'hello, taylor!'
