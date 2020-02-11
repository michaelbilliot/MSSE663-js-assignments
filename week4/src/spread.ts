// #1 Array copying
export const numbers = [1, 2, 3, 4, 5];

export const originalNumbers = numbers.map(number => number);
console.log(originalNumbers);

export const copyNumbers = [...numbers];
console.log(copyNumbers);

// #2 Combining arrays
export const winners = ['first'];
export const runnerUps = ['second', 'third', 'fourth', 'fifth'];
export const modifiedRunnerUps = ['second', 'third', 'fourth', 'fifth'];

export const originalContenders = modifiedRunnerUps.unshift(winners[0]);
console.log(modifiedRunnerUps);

export const allContenders = [ ...winners, ...runnerUps];
console.log(allContenders);

// #3 Combining objects
export const bob = {
  man: 'Bob'
};

export const kyle = {
  boy: 'Kyle'
};

export const originalPersons = Object.assign(bob, kyle);

export const people = {...bob, ...kyle};
console.log(people);


// #4 Modifying values in arrays of objects
export const data = [
  {
    id: 0,
    task: 'Do the thing'
  },
  {
    id: 1,
    task: 'Do the other thing'
  },
  {
    id: 2,
    task: 'Do the last thing'
  }
];

export const update = {
  id: 1,
  task: 'Do the other thing... again'
};

export const originalUpdates = data.map(task => {
  if (task.id === update.id) {
    return Object.assign(task, update);
  }
  return task;
});


export const updatedData = data.map(element => element.id == update.id ? {
  ...element, task: update.task }: element);

console.log(originalUpdates);
console.log(updatedData);
