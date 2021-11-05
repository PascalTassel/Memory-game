export default class Datas {
  
  /**
   * Init datas object
   * @param {string} backupMethod Database | localStorage
   * @param {object} settings Ranking settings
   */
  constructor (backupMethod, settings) {
    // Datas file
    this.endPoint = 'datas.php';
    // Backup Method
    this.backupMethod = backupMethod;

    // Set datas settings
    for (let setting in settings) {
      this[setting] = settings[setting];
    }
  }

  /**
   * Create scores database
   * @param {number} elapsedTime
   */
  createDatabase() {
    // Create database
    if (this.backupMethod === 'database') {
      return fetch(`${this.endPoint}?setDb`, {
        method: 'POST',
        mode: 'same-origin',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json'
        },
      })
        .then((response) => response.json())
        .then((responseData) => {
          
          if (responseData.success === false) {
            throw new Error('Impossible de créer la base de données');
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
   * Get player rank
   * @param {number} elapsedTime
   */
  getRank(elapsedTime) {
    if (this.backupMethod === 'database') {
      return fetch(`${this.endPoint}?getRank`, {
        method: 'POST',
        mode: 'same-origin',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json'
        },
        body: JSON.stringify({score: elapsedTime})
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
   * Get highest scores
   */
  getRanking() {
    if (this.backupMethod === 'database') {
      return fetch(`${this.endPoint}?getRanking`, {
        method: 'POST',
        mode: 'same-origin',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json'
        },
        body: JSON.stringify({limit: this.rankingLimit})
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
   * Set player score
   * @param {object} datas Datas game to store
   */
  setScore(datas) {
    if (this.backupMethod === 'database') {
      return fetch('datas.php?setScore', {
        method: 'POST',
        body: JSON.stringify(datas)
      })
        .then((response) => response.json())
        .then((responseData) => {
          return responseData.success;
        });
    } else {
      const ranking = JSON.parse(localStorage.getItem('memoryGame')),
        currentdate = new Date(),
        dateEn = currentdate.toISOString().substr(0, 10);

      datas.date = `${dateEn.split('-')[2]}-${dateEn.split('-')[1]}-${dateEn.split('-')[0]} ${currentdate.toISOString().substr(11, 8)}`;
      datas.player = datas.player.trim() === '' ? '-' : datas.player.trim();
      
      ranking.push(datas);

      localStorage.setItem('memoryGame', JSON.stringify(ranking));
    }
  }
}
