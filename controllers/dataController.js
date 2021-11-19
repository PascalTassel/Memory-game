// Get data mapper
const dataMapper = require('../modules/dataMapper');

const data = {
  /**
   * Create database and table if not exists
   */
  setDb: (_, response) => {
    // Create database
    dataMapper.setDatabase((dbError) => {
      if (dbError) {
        return response.send({error: dbError.toString()});
      }
      // Create table
      dataMapper.setTable((tableError) => {
        if (tableError) {
          return response.send({error: tableError.toString()});
        }
        response.send({success: true});
      });
    });
  },
  /**
   * Get game ranking
   */
  getRanking: (request, response) => {
    dataMapper.getRanking(Number(request.body.limit), (error, results) => {
      if (error) throw error;
      response.send({ranking: results});
    });
  },
  /**
   * Get player rank
   */
  getRank: (request, response) => {
    dataMapper.getRank(Number(request.body.score), (error, results) => {
      if (error) throw error;
      response.send({rank: results[0].rank});
    });
  },
  /**
   * Set player score
   */
  saveScore: (request, response) => {
    const playerData = {
      player: request.body.player,
      score: Number(request.body.score),
      date: request.body.date
    };
    dataMapper.saveScore(playerData, (error) => {
      if (error) {
        return response.send({error: error.toString()});
      }
      response.send({success: true});
    });
  }
};

module.exports = data;