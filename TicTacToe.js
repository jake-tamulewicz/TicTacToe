const PLAYER_X_CLASS = 'x';
const PLAYER_O_CLASS = 'circle';
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cellElements = document.querySelectorAll('[data-cell]');
const boardElement = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.getElementById('winningMessageText');
let isPlayerOTurn = false;

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    isPlayerOTurn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(PLAYER_X_CLASS);
        cell.classList.remove(PLAYER_O_CLASS);
        cell.removeEventListener('click', handleCellClick);
        cell.addEventListener('click', handleCellClick, { once: true });
    });
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
}

function handleCellClick(e) {
    const cell = e.target;
    const currentClass =
