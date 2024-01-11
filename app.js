const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo',
});

conn.connect();

conn.query('SELECT * FROM users', function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);
});

conn.end();
