/**
 * Counter module
 * Manage elapsed time and game duration
 */
export default class Counter {
  
  /**
   * Init counter
   * @param {object} game Game instance
   */
  constructor(game) {
    // DOM elements
    this.countUpElmt = document.getElementById('count-up');
    this.durationElmt = document.getElementById('duration');

    // Game instance
    this.game = game;

    // Elapsed time
    this.elapsedTime =  0;

    // Display max duration
    this.durationElmt.innerHTML = this.secondsToMinutes(game.duration);
  }

  /**
   * Convert seconds to minutes
   * @param {number} seconds Time in seconds
   * @returns {string} Time in seconds e.g. 10:00
   */
  secondsToMinutes(seconds) {
    return new Date(seconds * 1000).toISOString().substr(14, 5);
  }
  
  /**
   * Start counter
   */
  start() {
    const self = this;
    const startDate = new Date();
    const endDate = new Date();

    // each 1 second
    this.interval = setInterval( () => {
      endDate.setSeconds(endDate.getSeconds() + 1);

      const diffTime = Math.abs(endDate - startDate);
      // Display count up
      this.countUpElmt.innerHTML = new Date(diffTime).toISOString().substr(14, 5);

      // Progress width
      const width = ((self.elapsedTime + 1) / self.game.duration) * 100;
      self.game.progress.move(width);

      // Check counter
      if (self.elapsedTime === self.game.duration) {
        self.game.gameOver();
      }

      self.elapsedTime ++;

    }, 1000);
  }
  
  /**
   * Stop counter
   */
  stop() {
    clearInterval(this.interval);
  }
  
  /**
   * Reset counter
   */
  reset() {
    this.elapsedTime = 0;
    this.countUpElmt.innerHTML = '00:00';
  }
}
