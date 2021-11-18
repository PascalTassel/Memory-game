// Db connection
const connection = require('./database');

const dataMapper = {
  // Table name
  table: process.env.TABLE,
  /**
   * Create database if not exist
   */
  setDatabase: (callback) => {
    connection.query(`
      CREATE DATABASE IF NOT EXISTS ${connection.config.database}
    `, callback);
  },
  /**
   * Create table if not exist
   */
  setTable: (callback) => {
    connection.query(`
      CREATE TABLE IF NOT EXISTS ${connection.config.database}.${dataMapper.table}( 
        score_id  SMALLINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        player    VARCHAR(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
        score     SMALLINT NOT NULL,
        date      DATETIME NOT NULL
      )
    `, callback);
  },
  /**
   * Get ranking
   */
  getRanking: (limit, callback) => {
    connection.query(`
      SELECT player, score, DATE_FORMAT(date, '%Y-%m-%d %H:%i:%s') AS date FROM ${dataMapper.table} 
      ORDER BY score ASC LIMIT ${limit}
    `, callback);
  },
  /**
   * Get player rank
   */
  getRank: (score, callback) => {
    connection.query(`
      SELECT COUNT(score_id) + 1 AS rank FROM ${dataMapper.table} WHERE score <= ${score}
    `, callback);
  },
  /**
   * Save player score
   */
  saveScore: (playerData, callback) => {
    connection.query(`
      INSERT INTO ${dataMapper.table}
        (player, score, date) 
      VALUES 
        ('${playerData.player}', '${playerData.score}', '${playerData.date}')
    `, callback);
  }
};

module.exports = dataMapper;
