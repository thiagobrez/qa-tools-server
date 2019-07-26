/* eslint-disable */
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  userContext.vars.username = Faker.internet.userName();
  userContext.vars.password = Faker.internet.password();
  return done();
}

module.exports = {
  generateRandomData
}

/* eslint-enable */
