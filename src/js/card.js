/**
 * Card module
 * A card of cards game
 */
export default class Card {
  
  /**
   * Define card settings
   * @param {string} value Card value 
   * @param {string} bgPosition Card background Position 
   */
  constructor(value, bgPosition) {
    // Card background-position
    this.bgPosition = bgPosition;
    // Card value
    this.value = value;
    // Card visible state
    this.isVisible = false;
    // Card returnable state
    this.isReturnable = true;
  }
}
