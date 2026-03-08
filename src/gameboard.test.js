import { Gameboard } from "./gameboard.js";

test('Gameboard make 10x10 board with null value each', () => {

    const gb = new Gameboard();
    expect(gb.board[0]).toHaveLength(10);
    expect(gb.board[4][1]).toBe(null);
    expect(gb.ships).toHaveLength(0);
     expect(gb.missed).toHaveLength(0);
});

test('Gameboard hips and missed is empty', () => {

    const gb = new Gameboard();
 
    expect(gb.ships).toHaveLength(0);
     expect(gb.missed).toHaveLength(0);
});

test('position ship is added', () => {
    const gb = new Gameboard();
      gb.placeShip(2, 4, 1, 'vertical');
     
 
    expect(gb.ships).toHaveLength(1);
  
});

test('receiveAttack', () => {
  const gb = new Gameboard();

  const rezultat = gb.receiveAttack(7, 2);

  expect(rezultat).toBe(false);
  expect(gb.board[7][2]).toBe('miss');
  expect(gb.missed).toEqual([{ letter: 7, number: 2 }]);
});

 

  test('is game on?', () => {
  const gb = new Gameboard();
  gb.placeShip(2, 4, 1, 'vertical');

  const game = gb.allShipsSunk();

  expect(game).toBe(false);
 
  });