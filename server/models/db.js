const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo_list',
    password: 'your-password',
    port: 5432,
  });

module.exports = pool;
