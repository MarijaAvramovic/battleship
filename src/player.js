import { Gameboard } from "./gameboard.js";

export class Player {
  constructor(name = 'Player', isComputer = false) {
    this.name = name;
    this.gameboard = new Gameboard();
    this.isComputer = isComputer;
    this.attacked = new Set();   
  }

  attack(enemy, letter, number) {
    const key = `${letter},${number}`;
    if (this.attacked.has(key)) {
      throw new Error("Already attacked that spot");
    }
    this.attacked.add(key);

    return enemy.gameboard.receiveAttack(letter, number);
  }

  randomAttack(enemy) {
    let letter, number, key;
    do {
      letter = Math.floor(Math.random() * 10);
      number = Math.floor(Math.random() * 10);
      key = `${letter},${number}`;
    } while (this.attacked.has(key));

    return this.attack(enemy, letter, number);
  }
}
