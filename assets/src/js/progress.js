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
    this.barElmt.style.clipPath = `inset(0 ${100 - width}% 0 0)`;
  }

  /**
   * Reset progress bar width
   */
  reset() {
    this.barElmt.removeAttribute('style');
  }
}
