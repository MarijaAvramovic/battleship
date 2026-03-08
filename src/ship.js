 
export class Ship {
  #hits = 0;  // private field (optional but nice)

  constructor(length) {
    if (length < 1 || length > 5) throw new Error("Invalid ship length");
    this.length = length;
  }

  hit() {
    this.#hits++;
  }

  get hits() {
    return this.#hits;
  }

  isSunk() {
    return this.#hits >= this.length;
  }
}
