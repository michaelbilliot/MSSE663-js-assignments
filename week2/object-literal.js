/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */
let monkey = {
    size: 'medium',
    age: 10,
    species: 'Mandrill',
    eatBanana: function () {
        return `A ${this.size} ${this.species} eating a banana`;
    },

    celebrateBirthday: function() {
        return `The ${this.species} is now ${++this.age} years old`;
    }
};

console.log(monkey.eatBanana());
console.log(monkey.celebrateBirthday());

class Monkey {
    constructor() {
        this.size = 'medium';
        this.age = 10;
        this.species = 'Mandrill';
    }

    eatBanana() {
        this.size = 'large';
        return `A ${this.size} ${this.species} eating a banana`;
    }

    celebrateBirthday() {
        return `The ${m.species} is now ${++this.age} years old`;
    }
}

var m = new Monkey();
console.log(m.celebrateBirthday());
console.log(m.eatBanana());
console.log(m.celebrateBirthday());