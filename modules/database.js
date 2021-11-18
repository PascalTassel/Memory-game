// Get mysql module
const mysql = require('mysql');

// Db connection settings
const connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE
});

// Connect to db
connection.connect();

module.exports = connection;