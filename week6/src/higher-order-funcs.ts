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

interface thingsWithID {
    id: number;
    name: string;
}

const things = ['thing1', 'thing2'];

// create callback here
const createObject = (thing: string, index: number) => ({
    id: index,
    name: thing
})

// create map here
export const things2 = things.map(createObject);




/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from #1 to return a single `thing` object.
 * - Hoist that filter callback and curry all functions.
 */

// create function here
const getThingByName = (key: string) => (thing: thingsWithID) => thing.name === key;
 
function getThing(key: string) {
    return things2.filter(getThingByName(key));
}

export const aThing = getThing('thing1');
