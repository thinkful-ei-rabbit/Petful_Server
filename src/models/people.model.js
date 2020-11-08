const store = require('../data/store');
const Queue = require('./queue');

let People;

const setPeopleData = () => {
  People = new Queue();

  store.people.forEach((person) => People.enqueue(person));
};

setPeopleData();

module.exports = {
  getAll() {
    return People.all();
  },

  enqueue(person) {
    People.enqueue(person);
  },

  dequeue() {
    const deq = People.dequeue();
    return deq;
  },

  setPeopleData,
};
