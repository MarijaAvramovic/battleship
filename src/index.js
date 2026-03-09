import "./styles.css";
  import { Player } from './player.js';
import { domModule } from './dom.js';
 import { Gameboard } from "./gameboard.js";

 

const shipLengths = [5, 4, 3, 3, 2];

let humanPlayer;
let computerPlayer;
let currentTurn = 'human';

function initGame() {
  humanPlayer = new Player('Human');
  computerPlayer = new Player('Computer', true);

  resetAndPlaceRandomShips(humanPlayer);
  resetAndPlaceRandomShips(computerPlayer);

  domModule.renderPlayerBoard(humanPlayer.gameboard.board);
  domModule.renderEnemyBoard(computerPlayer.gameboard.board, handleAttack);
  domModule.updateStatus('Place your ships or randomize, then start game.');

  domModule.enableStartButton();
}

function resetAndPlaceRandomShips(player) {
  player.gameboard = new Gameboard();
  player.attacked = new Set();

  for (const length of shipLengths) {
    let placed = false;
    while (!placed) {
      try {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);
        const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
        player.gameboard.placeShip(length, row, col, direction);
        placed = true;
      } catch (error) {
        // Retry
      }
    }
  }
}

function handleAttack(row, col) {
  if (currentTurn !== 'human') return;

  try {
    const hit = humanPlayer.attack(computerPlayer, row, col);
    domModule.renderEnemyBoard(computerPlayer.gameboard.board, handleAttack);
    domModule.updateStatus(hit ? 'Hit!' : 'Miss!');
    checkGameOver();
    if (!computerPlayer.gameboard.allShipsSunk()) {
      currentTurn = 'computer';
      setTimeout(computerTurn, 500);
    }
  } catch (error) {
    domModule.updateStatus(error.message);
  }
}

function computerTurn() {
  const hit = computerPlayer.randomAttack(humanPlayer);
  domModule.renderPlayerBoard(humanPlayer.gameboard.board);
  domModule.updateStatus(hit ? 'Computer hit!' : 'Computer miss!');
  checkGameOver();
  currentTurn = 'human';
}

function checkGameOver() {
  if (computerPlayer.gameboard.allShipsSunk()) {
    domModule.updateStatus('You win!');
    endGame();
  } else if (humanPlayer.gameboard.allShipsSunk()) {
    domModule.updateStatus('Computer wins!');
    endGame();
  }
}

function endGame() {
  domModule.renderEnemyBoard(computerPlayer.gameboard.board);
}

function handleRandomPlacement() {
  resetAndPlaceRandomShips(humanPlayer);
  domModule.renderPlayerBoard(humanPlayer.gameboard.board);
  domModule.enableStartButton();
}

function startGame() {
  domModule.disablePlacementButtons();
  domModule.updateStatus("Player's turn");
  currentTurn = 'human';
}

domModule.attachRandomPlacementListener(handleRandomPlacement);
domModule.attachStartGameListener(startGame);

initGame();