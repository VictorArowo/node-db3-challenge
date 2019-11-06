const knex = requuire('knex');

const configOptions = require('../knexfile');

module.exports = knex(configOptions.development);
