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