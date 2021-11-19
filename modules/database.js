// Get mysql module
const mysql = require('mysql');

// Db connection settings
const connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD
});

module.exports = connection;