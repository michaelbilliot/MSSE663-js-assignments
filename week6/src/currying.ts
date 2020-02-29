// #1 Convert this javascript function to a curried function
export function curryMe(string1: string, string2: string, string3: string): string {
  return string1 + ' ' + string2 + ' ' + string3;
}

// source code here

export const convertedFunction = (string1: string) => (string2: string) => (string3: string) =>  string1 + ' ' + string2 + ' ' + string3;

// #2 Hoist and convert nested functions to curried functions
export function doMath(a: any) {
  return function add(b: any) {
    return function subtract(c: number) {
      return a + b - c;
    };
  };
}

// source code here
const substraction = (a: number) => (b: number) => (c: number) => a + b - c;
const addition = (a:number) => (b:number) => (c: number) => substraction(a)(b)(c);
export const performMath = (a:number) => addition(a);


// #3 Write a curried function that returns an array containing the ninjas who have a black belt

interface ninjaObject {
  name: string;
  belt: string;
}


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
export const blackBeltNinjas = allNinjas.filter((ninja: any) => {
  return ninja.belt === 'black';
});

console.log(allNinjas);
/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

type GenericType = {[key: string]: string};

interface ninjaStatus extends ninjaObject {
  status: GenericType;
} 

const statusTypes: GenericType = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

const gamerStatusTypes: GenericType = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

// source code here
export const ninjaWithStatus = ninjasOne.map((ninja: ninjaObject) => {
  return {
    ...ninja, 
    status: statusTypes[ninja.belt]
  }
});

export const ninjaGamerStatus = ninjasTwo.map((ninja: ninjaObject) => {
  return {
    ...ninja, 
    status: gamerStatusTypes[ninja.belt]
  }
});
