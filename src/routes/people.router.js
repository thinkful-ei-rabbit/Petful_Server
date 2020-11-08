const { Router, jsonBodyParser } = require('../middlewares');
const People = require('../models/people.model');

const peopleRouter = Router();

peopleRouter.use(jsonBodyParser);

peopleRouter.get('/', (_req, res, next) => {
  try {
    const people = People.getAll();
    res.status(200).json(people);
  } catch (error) {
    next(error);
  }
});

peopleRouter.post('/', (req, res, next) => {
  try {
    const { person } = req.body;
    People.enqueue(person);
    res.status(201).json({ message: 'Queue success' });
  } catch (error) {
    next(error);
  }
});

peopleRouter.delete('/', (_req, res, next) => {
  try {
    const del = People.dequeue();
    res.status(201).json({ deleted: del });
  } catch (error) {
    next(error);
  }
});

module.exports = peopleRouter;
