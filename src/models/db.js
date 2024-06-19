const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username_mysql', // Ganti dengan nama pengguna MySQL Anda
  password: 'password_mysql', // Ganti dengan kata sandi MySQL Anda
  database: 'nama_database' // Ganti dengan nama database yang Anda gunakan
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database as ID:', connection.threadId);
});

module.exports = connection;
