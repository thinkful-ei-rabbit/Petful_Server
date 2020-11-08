/*
|--------------------------------------------------------------------------
| BARREL EXPORT FILE
|--------------------------------------------------------------------------
| How-To barrel-export components:
| const thingsRouter = require('./things/thingsRouter')
|
| module.exports = {
|   thingsRouter
| }
|
| Why? Readability:
| const { thingsRouter, stuffRouter, userRouter } = require('./routes')
*/
const peopleRouter = require('./people.router');
const petsRouter = require('./pets.router');

module.exports = {
  peopleRouter,
  petsRouter,
};
