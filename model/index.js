var pg = require("pg");

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: '1612074_1612115_dack',
    password: '123456',
    port: 5433,
});

module.exports = pool;
