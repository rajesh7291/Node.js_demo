const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rajesh@7291',
  database: 'student information'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
  console.log('yee')
});


