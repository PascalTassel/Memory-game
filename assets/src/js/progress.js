/**
 * Progress module
 * Manage progress bar
 */
export default class Progress {
  
  /**
   * Init progress bar
   */
  constructor() {
    // DOM element
    this.barElmt = document.getElementById('progress-bar');
  }

  /**
   * Progress bar width
   * @param {string} width Progress bar width
   */
  move(width) {
    this.barElmt.style.width = `${width}%`;
  }

  /**
   * Reset progress bar width
   */
  reset() {
    this.barElmt.removeAttribute('style');
  }
}