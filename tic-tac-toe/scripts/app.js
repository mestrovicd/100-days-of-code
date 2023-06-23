const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = 0;

const players = [
    {
        name: "",
        symbol: "X",
    },
    {
        name: "",
        symbol: "O",
    },
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const form = document.querySelector("form");
const errorsOutput = document.getElementById("config-error");
const gameArea = document.getElementById("game");
const activePlayerName = document.getElementById("active-player");
const gameOverElement = document.getElementById("game-over");

const editPlayerOneBtn = document.getElementById("edit-p1");
const editPlayerTwoBtn = document.getElementById("edit-p2");
const cancelConfigBtn = document.getElementById("cancel-config-btn");
const startGame = document.getElementById("start-game-btn");
// const gameFieldElements = document.querySelectorAll("#board li");
const gameBoard = document.getElementById("board");

editPlayerOneBtn.addEventListener("click", openPlayerConfig);
editPlayerTwoBtn.addEventListener("click", openPlayerConfig);

cancelConfigBtn.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

form.addEventListener("submit", savePlayerConfig);

startGame.addEventListener("click", startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//     gameFieldElement.addEventListener("click", selectGameField);
// }
gameBoard.addEventListener("click", selectGameField);
