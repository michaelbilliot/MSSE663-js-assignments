"use strict";
/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const things = ['thing1', 'thing2'];
// create callback here
const createObject = (thing, index) => ({
    id: index,
    name: thing
});
// create map here
exports.things2 = things.map(createObject);
/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from #1 to return a single `thing` object.
 * - Hoist that filter callback and curry all functions.
 */
// create function here
console.log("things2 = ", exports.things2);
const getThingByName = (key) => (thing) => thing[name] === key;
const a = function (key) {
    return exports.things2.filter(getThingByName(key));
};
console.log(a('thing1'));
