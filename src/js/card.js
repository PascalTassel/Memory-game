export default class Card {
  
  /**
   * Define card settings
   * @param {string} value Card value 
   * @param {string} bgPosition Card background Position 
   */
  constructor(value, bgPosition) {
    this.bgPosition = bgPosition;   // Card background-position;
    this.value = value;             // Card value
    this.isActive = true;           // Card state
    this.isClickable = false;       // Clickable card state
    this.isFlipped = false;         // Card flipped state
  }
}
