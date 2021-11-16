// Import modules
import Alert from './alert.js';
import Card from './card.js';
import Counter from './counter.js';
import Datas from './datas.js';
import Progress from './progress.js';

/**
 * Memory module
 * Game engine
 */
export default class Memory {
  
  /**
   * Game instance : settings and init game
   */
  constructor() {
    // Get settings
    fetch('settings.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Check settings integrity
        if (!this.checkSettings(data)) {
          return false;
        }

        // DOM elements
        this.boardElmt = document.getElementById('cards');
        this.countDownElmt = document.getElementById('countdown');
        this.countDownValueElmt = document.getElementById('countdown-value');

        // Progress bar instance
        this.progress = new Progress();
        // Counter instance
        this.counter = new Counter(this.duration);
        // Datas instance
        this.datas = new Datas(this.backupMethod, this.rankingLimit, data.database);
        // Alert instance
        this.alert = new Alert(this);

        // Init game
        this.init();
      });
  }

  /**
   * Create cards game
   */
  init() {
    // Cards game
    this.cards = [];
    // Current selected cards
    this.selectedCards = [];
    // Flipped cards
    this.flippedCards = [];
    // Game status
    this.isWin = false;
    // Player score
    this.score = 0;
    // Cards values
    let cardsValues = this.cardsValues;

    // Set cards values
    let n = 1;
    while (n < this.nbOccurences) {
      cardsValues = cardsValues.concat(cardsValues);
      n ++;
    }
    
    // Add cards to cards game
    for (let i = 0; i < cardsValues.length; i ++) {
      const value = cardsValues[i],
        bgPosition = `0px ${((this.bgCardIncrement * -1) * i)}px`,
        // Card instance
        card = new Card(value, bgPosition);
      
      // Add card to cards game
      this.cards.push(card);
    }
    
    // Display cards
    this.displayCards();
  }
  
  /**
   * Append cards into DOM
   */
  displayCards() {
    // Mix card game
    this.cards.sort(() => Math.random() - 0.5);
    
    // Create cards elmt
    for (let card of this.cards) {
      const liElmt = document.createElement('li'),
        frontElmt = document.createElement('div'),
        backElmt = document.createElement('div');

      // Card elmt properties
      liElmt.className = '';
      liElmt.classList.add('card');
      frontElmt.classList.add('card__front');
      frontElmt.style.backgroundPosition = card.bgPosition;
      backElmt.classList.add('card__back');

      // Show card's value in debug mode
      backElmt.innerHTML = this.debug ? `<span class="card__value">${card.value}</span>` : '';

      // Append back and front to card elmt
      liElmt.append(backElmt, frontElmt);

      // Store liElemt in card object
      card.elmt = liElmt;
      
      // On card elmt click
      card.elmt.addEventListener('click', () => {

        if (this.selectedCards.length !== this.nbOccurences) {

          // Flip card
          card.elmt.classList.add('card--flipped');

          // Flipped card
          card.isVisible = true;

          // Add to selected cards
          this.selectedCards.push(card.value);

          // Compare returned cards
          if (this.selectedCards.length === this.nbOccurences) {
            this.checkFlippedCards();
          }
        }
      });

      //Append card to list element
      this.boardElmt.appendChild(card.elmt);
    }
  }
  
  /**
   * Compare selected cards
   */
  checkFlippedCards() {
    //Are the selected cards identical ?
    const identical = this.selectedCards[0] === this.selectedCards[1];
    
    for (let i = 0; i < this.cards.length; i ++) {
      const card = this.cards[i];
      
      // If not returned and returnable, disable card
      card.elmt.classList.toggle('card--disabled', card.isReturnable && (card.isVisible === false));

      // If identical, blink card
      card.elmt.classList.toggle('card--blink', identical && this.selectedCards.includes(card.value));

      // If identical, add card to flipped cards
      if (identical && this.selectedCards.includes(card.value)) {
        this.flippedCards.push(card);
        card.isReturnable = false;

        continue;
      }

      // Visible card state
      card.isVisible = false;

      // Hide and enable card
      if (card.isReturnable) {
        const self = this;

        setTimeout(() => {
          card.elmt.classList.remove('card--flipped', 'card--disabled');
        }, self.visibleDuration * 1000);
      }
    }
    
    // Remove selected cards
    this.selectedCards = [];

    // if all cards are visible
    if (this.flippedCards.length === this.cards.length) {
      this.isWin = true;

      // game over
      this.gameOver();
      return;
    }
  }
  
  /**
   * Launch countdown
   */
  launch() {
    const self = this;
    let countFrom = 3;

    // Show countdown
    this.countDownElmt.classList.remove('hide');

    this.countDown = setInterval(() => {
      let countDownValue;

      switch(countFrom) {
      case 0:
        countDownValue = 'GO';
        break;
      case -1:
        self.play();
        countDownValue = '';
        break;
      default:
        countDownValue = countFrom;
      }

      self.countDownValueElmt.innerHTML = countDownValue;
      self.countDownElmt.classList.toggle('hide', countFrom < 0);
      
      countFrom --;
    }, 1000);
  }

  /**
   * Play start
   */
  play() {
    const self = this;

    // Remove countdown
    clearInterval(this.countDown);

    // Launch counter
    this.counter.start();
    
    // Check counter
    this.checkCounter = setInterval(() => {
      if (self.counter.elapsedTime === self.duration) {
        self.gameOver();
      }
      // Progress width
      const width = ((self.counter.elapsedTime + 1) / self.duration) * 100;
      self.progress.move(width);
    }, 1000);
  }

  /**
   * Game stop
   */
  gameOver() {
    // Remove counter checking
    clearInterval(this.checkCounter);
    
    // Stop counter
    this.counter.stop();

    // If player loose, display loose alert
    if (this.isWin === false) {
      this.alert.loose();
      return;
    }

    // Set score
    this.score = this.counter.elapsedTime;
    
    // Get formated score
    const time = this.counter.secondsToMinutes(this.score);

    // Display win alert
    this.alert.win(time);
  }

  /**
   * Play again
   */
  replay() {
    // Remove cards
    this.boardElmt.innerHTML = '';

    // Reset counter
    this.counter.reset();

    // Reset progress bar
    this.progress.reset();
    
    // Cards game
    this.init();

    // Launch game
    this.launch();
  }

  /**
   * Check settings parameters integrity
   * @param {object} settings App settings
   * @returns {boolean} Settings integrity
   */
  checkSettings(settings) {
    // Set game settings
    for (let setting in settings.game) {
      // Get setting value
      const settingValue = settings.game[setting];

      // Value integrity
      switch(setting) {
      case 'debug':
        if (typeof settingValue !== 'boolean') {
          console.error('debug setting is not a boolean.');
          return false;
        }
        break;
      case 'duration':
        if (typeof settingValue !== 'number') {
          console.error('Duration setting is not a number.');
          return false;
        } else if (settingValue < 60 || settingValue > 3599) {
          console.error('duration setting must be between 60 and 3599.');
          return false;
        }
        break;
      case 'bgCardIncrement':
        if (typeof settingValue !== 'number') {
          console.error('bgCardIncrement setting is not a number.');
          return false;
        }
        break;
      case 'cardsValues':
        if (!Array.isArray(settingValue)) {
          console.error('cardsValues setting is not an array.');
          return false;
        }
        break;
      case 'nbOccurences':
        if (typeof settingValue !== 'number') {
          console.error('nbOccurences setting is not a number.');
          return false;
        } else if (settingValue < 2 || settingValue > 3) {
          console.error('rankingLimit setting must be 2 or 3.');
          return false;
        }
        break;
      case 'visibleDuration':
        if (typeof settingValue !== 'number') {
          console.error('visibleDuration setting is not a number.');
          return false;
        } else if (settingValue < 2 || settingValue > 5) {
          console.error('rankingLimit setting must be between 2 and 5.');
          return false;
        }
        break;
      case 'backupMethod':
        if (!['database', 'localStorage'].includes(settingValue)) {
          console.error('backupMethod setting must be equal to "database" or "localStorage".');
          return false;
        }
        break;
      case 'rankingLimit':
        if (typeof settingValue !== 'number') {
          console.error('rankingLimit setting is not a number.');
          return false;
        } else if (settingValue < 2 || settingValue > 10) {
          console.error('rankingLimit setting must be between 2 and 10.');
          return false;
        }
        break;
      default:
        console.error(`${setting} setting is not valid.`);
        return false;
      }

      this[setting] = settingValue;
    }

    // Database settings integrity
    if (this.backupMethod === 'database') {
      for (let setting in settings.database) {
        // Get setting value
        const settingValue = settings.database[setting];

        // Value integrity
        switch(setting) {
        case 'host':
          if (typeof settingValue !== 'string') {
            console.error('host setting is not a string.');
            return false;
          }
          break;
        case 'database':
          if (typeof settingValue !== 'string') {
            console.error('database setting is not a string.');
            return false;
          }
          break;
        case 'table':
          if (typeof settingValue !== 'string') {
            console.error('table setting is not a string.');
            return false;
          }
          break;
        case 'user':
          if (typeof settingValue !== 'string') {
            console.error('user setting is not a string.');
            return false;
          }
          break;
        case 'password':
          if (typeof settingValue !== 'string') {
            console.error('host setting is not a string.');
            return false;
          }
          break;
        default:
          console.error(`${setting} setting is not valid.`);
          return false;
        }
      }
    }

    return true;
  }
}
