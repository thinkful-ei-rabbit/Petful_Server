const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const { NODE_ENV, CORS_ORIGIN_DEV, CORS_ORIGIN_PROD } = require('./config');

const { peopleRouter, petsRouter } = require('./routes');
const { app, error } = require('./middlewares');
const { setPeopleData } = require('./models/people.model');
const { setPetData } = require('./models/pets.model');

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'dev';
const morganSkip = { skip: () => NODE_ENV === 'test' };
const corsOrigin = {
  origin: NODE_ENV === 'production' ? CORS_ORIGIN_PROD : CORS_ORIGIN_DEV,
};

app.use(morgan(morganOption, morganSkip));
app.use(cors(corsOrigin));
app.use(helmet());

app.get('/petful', (_req, res) => {
  res.send('Express boilerplate initialized!');
});

/*
| ROUTES HERE -------------------------
*/

app.use('/petful/reset/people', (_req, res) => {
  setPeopleData();
  res.status(200).send('People reset success!');
});

app.use('/petful/reset/pets', (_req, res) => {
  setPetData();
  res.status(200).send('Pet reset success!');
});

app.use('/petful/people', peopleRouter);
app.use('/petful/pets', petsRouter);

/*
|--------------------------------------
*/

app.use(error.notFound);
app.use(error.errorHandler);

module.exports = app;
