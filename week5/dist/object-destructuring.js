"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #1 Object Destructuring
exports.object = { name: 'elvis', title: 'hip swinger' };
exports.person = exports.object.name;
exports.job = exports.object.title;
// Assign variables using ES6 so that we get (note, you cannot just make a completely new object):
console.log(exports.person); // 'elvis'
console.log(exports.job); // 'hip swinger'
// #2 Object Matching: Nested destructuring
exports.nestedObject = {
    user: 'elvis',
    address: {
        city: 'denver',
        state: 'colorado'
    },
    id: 1
};
exports.user = exports.nestedObject.user;
exports.address = exports.nestedObject.address;
exports.id = exports.nestedObject.id;
// expected results:
console.log(exports.user); // 'elvis'
console.log(exports.address); // { city: 'denver', state: 'colorado' }
console.log(exports.id); // 1
// #4 Create a new object given the destructed values above
exports.anotherObject = {
    user: exports.user,
    address: exports.address,
    id: exports.id
};
// #3 Object with key value pairs: construct a statement
let greet = { greeting: 'hello', named: 'taylor' };
exports.hello = greet.greeting + `, ` + greet.named + `!`;
console.log(exports.hello);
// expected result: 'hello, taylor!'
