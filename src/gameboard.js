import { Ship } from './ship.js';
 

export class Gameboard {
  board = Array(10).fill().map(() => Array(10).fill(null));
  ships = [];
  missed = [];


  placeShip(length, letter, number, direction = 'horizontal'){
    const ship = new Ship(length);

    const shipsPosition = [];

    for (let i = 0; i < length; i++) {
        const positionLetter = direction == 'horizontal' ? letter : letter + i;
        const positionNumber = direction == 'horizontal' ? number + i : number;
        if (positionNumber < 0 || positionNumber > 9 || positionLetter < 0 || positionLetter > 9) {
        throw new Error("ship out of board limit")
    }
    if (this.board[positionLetter][positionNumber] !== null) {
        throw new Error("Ships overlap");
      }
      
      shipsPosition.push([positionLetter, positionNumber]);

       shipsPosition.forEach(([positionLetter, positionNumber]) => {
      this.board[positionLetter][positionNumber] = ship;
     });
  }
     
    
     
    
     
    this.ships.push(ship);
  }

}