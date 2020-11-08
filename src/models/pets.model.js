const store = require('../data/store');
const Queue = require('./queue');

let Pets;

const setPetData = () => {
  Pets = {
    cats: new Queue(),
    dogs: new Queue(),
  };

  store.cats.forEach((cat) => Pets.cats.enqueue(cat));
  store.dogs.forEach((dog) => Pets.dogs.enqueue(dog));
};

setPetData();

module.exports = {
  getNext() {
    let next = { cat: null, dog: null };

    next.cat = Pets.cats.show();
    next.dog = Pets.dogs.show();

    return next;
  },

  dequeue(type) {
    console.log(type);
    const deq = Pets[type + 's'].dequeue();
    return deq;
  },

  setPetData,
};
