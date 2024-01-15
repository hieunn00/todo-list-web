const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo_list',
    password: '891011',
    port: 5432,
  });

module.exports = pool;
