function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML =
        'You won, <span id="winner-name"></span>!';
    gameOverElement.style.display = "none";

    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            const gameBoardItem = gameBoard.children[gameBoardIndex];
            gameBoardItem.textContent = "";
            gameBoardItem.classList.remove("disabled");
            gameBoardIndex++;
        }
    }
}

function startNewGame() {
    if (players[0].name === "" || players[1].name === "") {
        alert("Please set player names for both players!");
        return;
    }

    resetGameStatus();

    activePlayerName.textContent = players[activePlayer].name;
    gameArea.style.display = "block";
}

function switchPlayer() {
    activePlayer = activePlayer === 1 ? 0 : 1;
    activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(e) {
    if (e.target.tagName !== "LI" || gameIsOver) {
        return;
    }

    const selectedField = e.target;
    const selectedCol = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow][selectedCol] > 0) {
        alert("Select an empty field!");
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add("disabled");

    gameData[selectedRow][selectedCol] = activePlayer + 1;

    const winnerId = checkGameOver();
    if (winnerId !== 0) {
        endGame(winnerId);
    }

    currentRound++;
    switchPlayer();
}

function checkGameOver() {
    // Checking the rows
    for (let i = 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[0][1] &&
            gameData[i][1] === gameData[0][2]
        ) {
            return gameData[i][0];
        }
    }

    // Checking the cols
    for (let i = 0; i < 3; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }

    // Checking diagonals
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ) {
        return gameData[0][0];
    }

    if (
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
    ) {
        return gameData[2][0];
    }

    if (currentRound === 9) {
        return -1;
    }
    return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = "block";

    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent =
            winnerName;
    } else {
        gameOverElement.firstElementChild.textContent = "It's a draw";
    }
}
