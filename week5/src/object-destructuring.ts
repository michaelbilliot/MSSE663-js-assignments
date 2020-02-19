// #1 Object Destructuring
export const object = { name: 'elvis', title: 'hip swinger' };

export const person = object.name;
export const job = object.title;

// Assign variables using ES6 so that we get (note, you cannot just make a completely new object):
console.log(person); // 'elvis'
console.log(job); // 'hip swinger'

// #2 Object Matching: Nested destructuring
export const nestedObject = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
};

export const user = nestedObject.user;
export const address = nestedObject.address;
export const id = nestedObject.id;

// expected results:
console.log(user); // 'elvis'
console.log(address); // { city: 'denver', state: 'colorado' }
console.log(id); // 1

// #4 Create a new object given the destructed values above

export const anotherObject = {
  user,
  address,
  id
};

// #3 Object with key value pairs: construct a statement
let greet = { greeting: 'hello',  named: 'taylor' }

export const hello = greet.greeting + `, ` + greet.named + `!`;
console.log(hello);
// expected result: 'hello, taylor!'
