const pool = require('../models/db');

const todoController = {
  getAllTodos: async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM todos ORDER BY id ASC');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('Internal Server Error');
    }
  },

  createTodo: async (req, res) => {
    const { task } = req.body;

    try {
      const result = await pool.query('INSERT INTO todos (id,task,completed) VALUES ($1,$2,$3) RETURNING *', [Date.now(), task, false]);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('Internal Server Error');
    }
  },

  updateTodo: async (req, res) => {
    const id = parseInt(req.params.id);
    console.log("LOG ~ updateTodo: ~ id:", id)
    const { task, completed } = req.body;

    try {
      const result = await pool.query(
        'UPDATE todos SET task = $1, completed = $2 WHERE id = $3 RETURNING *',
        [task, completed, id]
      );
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('Internal Server Error');
    }
  },

  deleteTodo: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      await pool.query('DELETE FROM todos WHERE id = $1', [id]);
      res.status(200).json({ message: 'Todo deleted successfully.' });
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = todoController;
