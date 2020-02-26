// #1 Variable swapping
export const fruits = ['apple', 'banana'];


// Currently, I would get the following:
//console.log(a); // 'apple'
//console.log(b); // 'banana'

// deconstruct here
export const [,a] = fruits;
export const [b] = fruits;

// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(a); // 'banana';
console.log(b); // 'apple';

// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];

// deconstruct here
export const [aa,bb, ...others] = food;

// expected result:
console.log(aa); // 'apple'
console.log(bb); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Contruct a statement
let words = ['hello', 'taylor'];
let [greeting] = words;
let [, name] = words;

// construct statement here
export const hello = greeting + `, ` + name + `!`;
// expected result: 'hello, taylor!'
