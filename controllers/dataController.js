// Required module
const mysql = require('mysql');

const data = {
  // Connection settings
  connection: {
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
  },
  // Table name
  table: process.env.TABLE,
  /**
   * Create database and table if not exists
   */
  setDb: (_, response) => {
    // Create pool (for multiples queries)
    const pool  = mysql.createPool({
      host     : data.connection.host,
      user     : data.connection.user,
      password : data.connection.password
    });

    pool.getConnection((error, connection) => {
      
      if (error) {
        return response.send({error: error.toString()});
      }

      // Create database
      connection.query(`
        CREATE DATABASE IF NOT EXISTS ${data.connection.database}`,
      (error) => {
        if (error) {
          return response.send({error: error.toString()});
        }
      });

      // Create table
      connection.query(`
        CREATE TABLE IF NOT EXISTS ${data.connection.database}.${data.table}( 
          score_id  SMALLINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
          player    VARCHAR(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
          score     SMALLINT NOT NULL,
          date      DATETIME NOT NULL
        )`,
      (error) => {
        if (error) {
          return response.send({error: error.toString()});
        }

        response.send({success: true});
      });
    });
  },
  /**
   * Get game ranking
   */
  getRanking: (request, response) => {
    const connection = mysql.createConnection(data.connection);
    connection.connect();

    connection.query(`
      SELECT player, score, DATE_FORMAT(date, '%Y-%m-%d %H:%i:%s') AS date FROM ${data.table} 
      ORDER BY score ASC LIMIT ${request.body.limit}`,
    (error, results) => {

      if (error) throw error;

      response.send({ranking: results});
    });

    connection.end();
  },
  /**
   * Get player rank
   */
  getRank: (request, response) => {
    const connection = mysql.createConnection(data.connection);
    connection.connect();

    connection.query(`
      SELECT COUNT(score_id) + 1 AS rank FROM ${data.table} WHERE score <= ${request.body.score}`, 
    (error, results) => {

      if (error) throw error;

      response.send({rank: results[0].rank});
    });

    connection.end();
  },
  /**
   * Set player score
   */
  setScore: (request, response) => {
    const connection = mysql.createConnection(data.connection);
    connection.connect();

    connection.query(`
      INSERT INTO ${data.table}(player, score, date) VALUES ('${request.body.player}', '${request.body.score}', '${request.body.date}')`, 
    (error) => {

      if (error) {
        return response.send({error: error.toString()});
      }
      
      response.send({success: true});
    });

    connection.end();
  }
};

module.exports = data;