export const domModule = (() => {
  const playerBoardElement = document.getElementById('player-board');
  const enemyBoardElement = document.getElementById('enemy-board');
  const statusElement = document.getElementById('status');
  const randomPlacementButton = document.getElementById('random-placement');
  const startGameButton = document.getElementById('start-game');

  function renderBoard(boardElement, boardData, isPlayerBoard = false, attackCallback = null) {
    boardElement.innerHTML = '';
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = row;
        cell.dataset.col = col;

        const cellValue = boardData[row][col];
        if (cellValue === 'hit') {
          cell.classList.add('hit');
        } else if (cellValue === 'miss') {
          cell.classList.add('miss');
        } else if (isPlayerBoard && cellValue instanceof Object && cellValue.constructor.name === 'Ship') {
          cell.classList.add('ship');
        }

        if (cellValue === 'hit' || cellValue === 'miss') {
          cell.classList.add('attacked');
        } else if (attackCallback && !isPlayerBoard) {
          cell.addEventListener('click', () => attackCallback(row, col));
        }

        boardElement.appendChild(cell);
      }
    }
  }

  function updateStatus(message) {
    statusElement.textContent = message;
  }

  function enableStartButton() {
    startGameButton.disabled = false;
  }

  function attachRandomPlacementListener(callback) {
    randomPlacementButton.addEventListener('click', callback);
  }

  function attachStartGameListener(callback) {
    startGameButton.addEventListener('click', callback);
  }

  function disablePlacementButtons() {
    randomPlacementButton.disabled = true;
    startGameButton.disabled = true;
  }

  return {
    renderPlayerBoard: (boardData) => renderBoard(playerBoardElement, boardData, true),
    renderEnemyBoard: (boardData, attackCallback) => renderBoard(enemyBoardElement, boardData, false, attackCallback),
    updateStatus,
    enableStartButton,
    attachRandomPlacementListener,
    attachStartGameListener,
    disablePlacementButtons,
  };
})();