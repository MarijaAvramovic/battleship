
Battleship
 
play: https://marijaavramovic.github.io/battleship/
 
Developed a complete, browser-based version of the timeless Battleship game.

Modular JavaScript architecture (factory functions, object-oriented patterns for Gameboard, Ship, and Player classes)
Complex DOM manipulation and event delegation for smooth interactivity
2D array logic, coordinate mapping, probability-based AI decisions, and state management without external state tools
 My ‘ships’ are objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.
I used ship.test.js to test ship object’s public interface.   
Ships have a hit() function that increases the number of ‘hits’.
isSunk() is a function that calculates whether a ship is considered sunk based on its length and the number of hits it has received.


Practice testing
I have a Gameboard class/factory.
Using tests. 
Gameboards is  able to place ships at specific coordinates by calling the ship factory or class.
Gameboard class has a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot as obj so it can be displayed  properly.
Gameboard can call isSunkAll to report whether or not all of its ships have been sunk.

I have a Player class/factory.
Made for two types of players in the game, ‘real’ players and ‘computer’ players.
Each player object can contain its own gameboard.