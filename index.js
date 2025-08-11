const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js');

const app = express();
app.use(bodyParser.json());

// CREATE STUDENT INFORMATION
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) throw err;
    res.send({ message: 'User created!', userId: result.insertId });
  });
});


// READ ALL STUDENT INFORMATION
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// READ ONE STUDENT INFORMATION
app.get('/users/:id', (req, res) => {
  const sql = 'SELECT * FROM users WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});

// UPDATE STUDENT INFORMATION
app.put('/users/:id', (req, res) => {
  const { name, email } = req.body;
  const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  db.query(sql, [name, email, req.params.id], (err) => {
    if (err) throw err;
    res.send({ message: 'User updated!' });
  });
});

// DELETE STUDENT INFORMATION
app.delete('/users/:id', (req, res) => {
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [req.params.id], (err) => {
    if (err) throw err;
    res.send({ message: 'User deleted!' });
  });
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
