export default class Counter {
  
  /**
   * Init counter
   * @param {Number} duration Time duration in seconds
   */
  constructor(duration) {
    // DOM elements
    this.countUpElmt = document.getElementById('count-up');
    this.durationElmt = document.getElementById('duration');

    // Elapsed time
    this.elapsedTime =  0;

    // Display max duration
    this.durationElmt.innerHTML = this.secondsToMinutes(duration);
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
