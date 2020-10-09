const pgp = require('pg-promise')();
const cn = 'postgres://postgres:admin@localhost:5432/express-demo';

const db = pgp(cn);

module.exports = db;