import { Ship } from './ship.js';
 

export class Gameboard {
  board = Array(10).fill().map(() => Array(10).fill(null));
  ships = [];
  missed = [];
 
    
placeShip(length, letter, number, direction = 'horizontal') {
  
  const ship = new Ship(length);
  const positions = [];   

  for (let i = 0; i < length; i++) {
    const row = direction === 'horizontal' ? letter : letter + i;
    const col = direction === 'horizontal' ? number + i : number;

    if (row < 0 || row > 9 || col < 0 || col > 9) {
      throw new Error("Ship out of board limits");
    }
    if (this.board[row][col] !== null) {
      throw new Error("Ships overlap");
    }

    positions.push([row, col]);
  }
 
  positions.forEach(([row, col]) => {
    this.board[row][col] = ship;
  });

  this.ships.push(ship);
}

  receiveAttack(letter, number) {
    if (letter < 0 || letter > 9 || number < 0 || number > 9) {
      throw new Error("Attack out of bounds");
    }
    const target = this.board[letter][number];
    if(target instanceof Ship) {
        target.hit();
        this.board[letter][number] = 'hit';
        return true;
    }
    else{
        this.missed.push({ letter, number });
        this.board[letter][number] = 'miss';
        return false;
    }
  }

  allShipsSunk() {
    if (this.ships.length === 0) return false;
    return this.ships.every(ship => ship.isSunk());
  }

  get board() {
    return this.board;
  }
}