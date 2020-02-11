"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #1 Array copying
exports.numbers = [1, 2, 3, 4, 5];
exports.originalNumbers = exports.numbers.map(number => number);
console.log(exports.originalNumbers);
exports.copyNumbers = [...exports.numbers];
console.log(exports.copyNumbers);
// #2 Combining arrays
exports.winners = ['first'];
exports.runnerUps = ['second', 'third', 'fourth', 'fifth'];
exports.modifiedRunnerUps = ['second', 'third', 'fourth', 'fifth'];
exports.originalContenders = exports.modifiedRunnerUps.unshift(exports.winners[0]);
console.log(exports.modifiedRunnerUps);
exports.allContenders = [...exports.winners, ...exports.runnerUps];
console.log(exports.allContenders);
// #3 Combining objects
exports.bob = {
    man: 'Bob'
};
exports.kyle = {
    boy: 'Kyle'
};
exports.originalPersons = Object.assign(exports.bob, exports.kyle);
exports.people = Object.assign(Object.assign({}, exports.bob), exports.kyle);
console.log(exports.people);
// #4 Modifying values in arrays of objects
exports.data = [
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
exports.update = {
    id: 1,
    task: 'Do the other thing... again'
};
exports.originalUpdates = exports.data.map(task => {
    if (task.id === exports.update.id) {
        return Object.assign(task, exports.update);
    }
    return task;
});
exports.updatedData = exports.data.map(element => element.id == exports.update.id ? Object.assign(Object.assign({}, element), { task: exports.update.task }) : element);
console.log(exports.originalUpdates);
console.log(exports.updatedData);
