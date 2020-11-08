const { Router, jsonBodyParser } = require('../middlewares');
const { getNext } = require('../models/pets.model');
const Pets = require('../models/pets.model');

const petsRouter = Router();

petsRouter.use(jsonBodyParser);

petsRouter.get('/', (_req, res, next) => {
  try {
    const pets = Pets.getNext();
    res.status(200).json(pets);
  } catch (error) {
    next(error);
  }
});

petsRouter.delete('/', (req, res, next) => {
  try {
    const { type } = req.body;
    console.log(type);
    const del = Pets.dequeue(type);
    res.status(201).json({ pet: del });
  } catch (error) {
    next(error);
  }
});

module.exports = petsRouter;
