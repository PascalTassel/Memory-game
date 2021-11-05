import Datas from './datas.js';

export default class Alert {
  
  /**
   * Init alert
   * @param {Object} game Game instance
   * @param {Object} database Database settings
   */
  constructor(game, database) {
    // DOM elements
    this.overlayElmt = document.getElementById('overlay');
    this.alertElmt = document.getElementById('alert');
    this.bodyElmt = document.getElementById('alert-body');
    this.footerElmt = document.getElementById('alert-footer');

    // Game instance
    this.game = game;

    // Datas instance
    this.datas = new Datas(this.game.backupMethod, database);

    // If game ranking is enabled
    const setDb = async () => {
      const createDatabase = await this.datas.createDatabase();
      
      if (createDatabase) {
        // Show ranking
        this.showRanking();
      }
    };
    setDb();
    
    // Define buttons
    this.buttons = [
      {action: 'Play', label: 'Jouer'},
      {action: 'Replay', label: 'Rejouer'},
      {action: 'Save', label: 'Enregistrer mon score'},
      {action: 'Cancel', label: 'Terminé'}
    ];
    
    // Append buttons to DOM
    for (let i in this.buttons) {
      const button = document.createElement('button');

      button.type = 'button';
      button.textContent = this.buttons[i].label;
      button.classList.add('hide', 'alert__button');

      this.footerElmt.appendChild(button);
      
      this[`btn${this.buttons[i].action}`] = button;
    }

    // Play when click on play button
    this.btnPlay.addEventListener('click', () => {
      this.hide();

      this.game.launch();
    });

    // Replay when click on replay button
    this.btnReplay.addEventListener('click', () => {
      this.hide();

      this.game.replay();
    });

    // Cancel when click on cancel button
    this.btnCancel.addEventListener('click', () => {
      this.hide();
    });

    // Save score when click on save button
    this.btnSave.addEventListener('click', () => {

      const playerName = this.bodyElmt.querySelector('input').value.trim(),
        datas = {
          player: playerName,
          score: this.game.score
        };

      this.hide();

      const setScore = async () => {
        const success = await this.datas.setScore(datas);
        let content = '<p>Votre score a bien été enregistré.</p>';
        
        if (success === false) {
          content = '<p>Une erreur est survenue. Votre score n\'a pas été enregistré.</p>';
        }

        this.btnCancel.classList.remove('hide');
        this.btnReplay.classList.remove('hide');
        this.show(content);
      };
      setScore();
    });
  }
  
  /**
   * Hide alert
   */
  hide() {
    this.overlayElmt.classList.remove('show');
    this.alertElmt.classList.remove('alert--scores');
    this.bodyElmt.innerHTML = '';

    for (let i in this.buttons) {
      this[`btn${this.buttons[i].action}`].classList.add('hide');
    }
  }

  /**
   * Append content and show alert
   * @param {string} content Alert body content 
   */
  show(content) {
    this.bodyElmt.innerHTML = content;
    this.overlayElmt.classList.add('show');
  }

  /**
   * On win
   * @param {string} time Player formated score
   */
  win(time) {
    var content = `<p>Félicitations, vous avez gagné !<br>Votre temps est de <strong>${time}</strong>.</p>`;
    
    // Get rank
    const getRank = async () => {
      const rank = await this.datas.getRank(this.game.score);

      if (rank <= this.datas.rankingLimit) {
        content += `<p>Vous occupez la <strong>${rank + (rank === 1 ? 'ère' : 'ème')}</strong> place du classement&nbsp;!</p>
        <p><input type="text" name="pseudo" placeholder="Votre pseudo" maxlength="15" class="alert__input"></p>`;
      
        this.btnSave.classList.remove('hide');
      } else {
        this.btnReplay.classList.remove('hide');
      }
      // Show alert
      this.show(content);
    };
    getRank();
  }

  /**
   * On loose
   */
  loose() {
    const content = '<p>Désolé, le temps imparti est écoulé !</p>';

    this.btnCancel.classList.remove('hide');
    this.btnReplay.classList.remove('hide');
    this.show(content);
  }

  /**
   * Display highest's scores in a table
   */
  showRanking() {
    const getRanking = async () => {
      const ranking = await this.datas.getRanking();
      
      if (Array.isArray(ranking)) {
        let content = '<h2 class="alert__title">Meilleurs scores</h2>';

        if (ranking.length) {

          content  += `<table class="alert__table">
            <tbody>`;
        
          ranking.forEach( (party, i) => {
            const position = String(i + 1).padStart(2, 0);
            content  += `
                <tr>
                  <td class="rank">${position}</td>
                  <td class="player">
                    <strong>${party.player === null ? '-' : party.player}</strong>
                    <span class="hide-md"><br>${party.date.split(' ')[0]} <small>${party.date.split(' ')[1]}</small></span>
                  </td>
                  <td class="date show-md">${party.date.split(' ')[0]} <small>${party.date.split(' ')[1]}</small></td>
                  <td class="time"><strong>${this.game.counter.secondsToMinutes(party.score)}</strong></td>
                </tr>`;
          });
      
          content +=
            `</tbody>
          </table>`;
        } else {
          content  += '<p>Aucun score sauvegardé. Jouez maintenant pour enregistrer le vôtre !</p>';
        }

        // Show alert
        this.btnPlay.classList.remove('hide');
        this.alertElmt.classList.add('alert--scores');

        this.show(content);
      }
    };
    getRanking();
  }

}
