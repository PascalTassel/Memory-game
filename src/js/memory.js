import Alert from './alert.js';
import Card from './card.js';
import Counter from './counter.js';
import Progress from './progress.js';

export default class Memory {
  
  /**
   * Game instance
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
    
        // Cards game
        this.cards = [];
        // Nb of visible cards
        this.nbVisibleCards = 0;
        // Current selected cards
        this.selectedCards = [];
        // Game status
        this.isWin = false;
        // Player score
        this.score = 0;
        // Progress bar instance
        this.progress = new Progress();
        // Counter instance
        this.counter = new Counter(this.duration);
        // Alert instance
        this.alert = new Alert(this, data.database);

        // Init game
        this.init();
      });
  }

  /**
   * Init game : create cards game
   */
  init() {

    // Set cards values
    let n = 1;
    while (n < this.nbOccurences) {
      this.cardsValues = this.cardsValues.concat(this.cardsValues);
      n ++;
    }
    
    // Add cards to cards game
    for (let i = 0; i < this.cardsValues.length; i ++) {
      const value = this.cardsValues[i],
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
    
    // Create li elements contains card's back and front
    for (let i in this.cards) {
      const card = this.cards[i],
        liElmt = document.createElement('li'),
        frontElmt = document.createElement('div'),
        backElmt = document.createElement('div'),
        self = this;

      // Card properties
      card.isFlipped = false;
      card.isClickable = true;
      card.isActive = true;

      // Card css properties
      liElmt.className = '';
      liElmt.classList.add('card');
      frontElmt.classList.add('card__front');
      frontElmt.style.backgroundPosition = card.bgPosition;
      backElmt.classList.add('card__back');

      // Show card's value in debug mode
      backElmt.innerHTML = this.debug ? `<span class="card__value">${card.value}</span>` : '';

      // Append back and front to card element
      liElmt.append(backElmt, frontElmt);

      // Store liElemt in card object
      card.elmt = liElmt;
      
      // On card click
      liElmt.addEventListener('click', () => {
        
        card.isFlipped = true;

        // Is card clickable ?
        if (card.isClickable) {
          // Disable clickable state
          card.isClickable = false;
          // Flip card
          liElmt.classList.add('card--flipped');
          // Store card's value
          self.selectedCards.push(card.value);
          // If stored cards number === number cards to find
          if (self.selectedCards.length === self.nbOccurences) {
            // Compare selected cards
            self.checkFlippedCards();
          }
          
          return;
        }
        
        // Prevent click on the card
        return false;
      });

      //Append card to list element
      this.boardElmt.appendChild(liElmt);
    }
  }
  
  /**
   * Compare selected cards
   * @returns {void}
   */
  checkFlippedCards() {
    const self = this,
      isSame = this.selectedCards[0] === this.selectedCards[1];
    
    // Disable active cards
    for (let i in this.cards) {
      const liElmt = Array.from(this.boardElmt.querySelectorAll('li'))[i];

      if (isSame && this.cards[i].isFlipped) {
        this.cards[i].isActive = false;
        liElmt.classList.add('card--blink');
      } else if (this.cards[i].isActive && (this.cards[i].isFlipped === false)) {
        liElmt.classList.add('card--disabled');
      }
    }
    
    // if same cards
    if (isSame) {
      // update visible cards number
      this.nbVisibleCards += this.selectedCards.length;
    }
    
    // Empty selected cards
    this.selectedCards = [];
    
    // if all cards are visible
    if (this.nbVisibleCards === this.cards.length) {
      this.isWin = true;
      // game over
      this.gameOver();
      return;
    }

    // Flip actives cards
    setTimeout(() => {
      for (let i in self.cards) {
        if (self.cards[i].isActive) {
          self.cards[i].isClickable = true;
          self.cards[i].isFlipped = false;
          Array.from(self.boardElmt.querySelectorAll('li'))[i].classList.remove('card--flipped', 'card--disabled');
        }
      }
    }, self.visibleDuration * 1000);
  }

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
   * Play game
   */
  play() {
    console.log('play');
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
    
    // Disable click on active's cards
    for (let i in this.cards) {
      if (this.cards[i].isActive) {
        this.cards[i].isClickable = false;
      }
    }

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
    this.boardElmt.innerHTML = '';

    // Reset counter
    this.counter.reset();

    // Reset progress bar
    this.progress.reset();
    
    // Display cards
    this.displayCards();

    // Reset nb Visible cards
    this.nbVisibleCards = 0;

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
        }
        break;
      case 'visibleDuration':
        if (typeof settingValue !== 'number') {
          console.error('visibleDuration setting is not a number.');
          return false;
        }
        break;
      case 'backupMethod':
        if (!['database', 'localStorage'].includes(settingValue)) {
          console.error('backupMethod setting must be equal to "database" or "localStorage".');
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
        case 'dbName':
          if (typeof settingValue !== 'string') {
            console.error('dbName setting is not a string.');
            return false;
          }
          break;
        case 'tableName':
          if (typeof settingValue !== 'string') {
            console.error('tableName setting is not a string.');
            return false;
          }
          break;
        case 'userName':
          if (typeof settingValue !== 'string') {
            console.error('userName setting is not a string.');
            return false;
          }
          break;
        case 'password':
          if (typeof settingValue !== 'string') {
            console.error('host setting is not a string.');
            return false;
          }
          break;
        case 'rankingLimit':
          if (typeof settingValue !== 'number') {
            console.error('rankingLimit setting is not a number.');
            return false;
          } else if (settingValue < 2 || settingValue > 11) {
            console.error('rankingLimit setting must be between 2 and 10.');
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
