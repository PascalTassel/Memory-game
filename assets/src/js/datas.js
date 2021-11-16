/**
 * Datas module
 * Manage game datas with MySQL database or localStorage
 */
export default class Datas {
  
  /**
   * Init datas object
   * @param {string} backupMethod Database | localStorage
   * @param {object} rankingLimit Ranking limit
   * @param {object} settings Database settings
   */
  constructor (backupMethod, rankingLimit, settings) {
    // Datas file
    this.endPoint = 'data';
    // Backup Method
    this.backupMethod = backupMethod;
    // Ranking Limit
    this.rankingLimit = rankingLimit;
    // Database settings
    this.database = settings;
  }

  /**
   * Create scores database
   * @param {number} elapsedTime
   * @returns {boolean} Storage success or failed
   */
  createDatabase() {
    // Create database
    if (this.backupMethod === 'database') {
      return fetch(`${this.endPoint}/setDb`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: this.formUrlEncoder(this.database)
      })
        .then((response) => response.json())
        .then((responseData) => {
          
          if (responseData.error) {
            throw new Error(responseData.error);
          }

          return responseData.success;
        })
        .catch((error) => {
          alert(error);
        });
    // Create localStorage array
    } else {
      if (localStorage.getItem('memoryGame') === null) {
        localStorage.setItem('memoryGame', JSON.stringify([]));
      }
      return true;
    }
  }

  /**
   * Get highest scores
   * @returns {array} Ranking
   */
  getRanking() {
    if (this.backupMethod === 'database') {
      return fetch(`${this.endPoint}/getRanking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: this.formUrlEncoder({limit: this.rankingLimit})
      })
        .then((response) => response.json())
        .then((responseData) => {
          return responseData.ranking;
        });
    } else {
      let ranking = JSON.parse(localStorage.getItem('memoryGame'));
      ranking.sort((a,b) => (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0));
      return ranking;
    }
  }

  /**
   * Get player rank
   * @param {number} elapsedTime
   * @returns {number} Player rank
   */
  getRank(elapsedTime) {
    if (this.backupMethod === 'database') {
      return fetch(`${this.endPoint}/getRank`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: this.formUrlEncoder({score: elapsedTime})
      })
        .then((response) => response.json())
        .then((responseData) => {
          return Number(responseData.rank);
        });
    } else {
      const ranking = JSON.parse(localStorage.getItem('memoryGame'));
      var rank = 0;
      ranking.push({
        identifier: true,
        score: elapsedTime
      });
      ranking.sort((a,b) => (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0));

      ranking.every( (party, index) => {
        if (Object.prototype.hasOwnProperty.call(party, 'identifier')) {
          rank = index + 1;
          return false;
        }
        return true;
      });

      return rank;
    }
  }

  /**
   * Set player score
   * @param {object} datas Datas game to store
   * @returns {boolean} Save score success or failed
   */
  setScore(datas) {
    // Current date and local time
    const currentDate = new Date(),
      locale = Intl.DateTimeFormat().resolvedOptions(),
      dateString = currentDate.toISOString().substr(0, 10).split('-');

    datas.date = `${dateString[0]}-${dateString[1]}-${dateString[2]} ${currentDate.toLocaleTimeString(locale)}`;

    if (this.backupMethod === 'database') {
      return fetch(`${this.endPoint}/setScore`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: this.formUrlEncoder(datas)
      })
        .then((response) => response.json())
        .then((responseData) => {

          if (responseData.error) {
            throw new Error(responseData.error);
          }

          return responseData.success;
        });
    } else {
      const ranking = JSON.parse(localStorage.getItem('memoryGame'));
      
      ranking.push(datas);

      localStorage.setItem('memoryGame', JSON.stringify(ranking));
      return true;
    }
  }

  formUrlEncoder(params) {
    const formUrlBody = [];

    for (let property in params) {
      const key = encodeURIComponent(property);
      const value = encodeURIComponent(params[property]);
      formUrlBody.push(`${key}=${value}`);
    }

    return formUrlBody.join('&');
  }
}
