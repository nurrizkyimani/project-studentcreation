// Update with your config settings.
require('dotenv').config({path: "./utils/.env"})

const pg = require('pg')
pg.defaults.ssl = true

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  ssl: true
};
