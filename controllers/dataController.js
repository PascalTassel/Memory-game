const mysql = require('mysql');

const data = {
  connection: {},
  table: null,
  /**
   * Create database and table if not exists
   */
  setDb: (request, response) => {
    // Connection settings
    data.connection = {
      host     : request.body.host,
      user     : request.body.user,
      password : request.body.password,
      database : request.body.database
    };

    // Table name
    data.table = request.body.table;

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