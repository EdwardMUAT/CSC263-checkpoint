// Basic game implementation

// Initialize variables for Tic-Tac-Toe
let board;
let currentPlayer;
let gameActive;

// Start Tic-Tac-Toe
function startTicTacToe() {
    console.log("Starting Tic-Tac-Toe...");
    initializeGame();
    renderBoard();
}

// Initialize game
function initializeGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    gameActive = true;
}

// Render the Tic-Tac-Toe board
function renderBoard() {
    const boardContainer = document.getElementById('ticTacToeBoard');
    boardContainer.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('onclick', `makeMove(${i}, ${j})`);
            cell.innerText = board[i][j];
            row.appendChild(cell);
        }
        boardContainer.appendChild(row);
    }
}

// Handle a move
function makeMove(row, col) {
    if (gameActive && board[row][col] === '') {
        board[row][col] = currentPlayer;
        renderBoard();
        if (checkWin()) {
            gameActive = false;
            alert(`${currentPlayer} wins!`);
        } else if (board.flat().every(cell => cell !== '')) {
            gameActive = false;
            alert("It's a tie!");
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Check for a win
function checkWin() {
    const winConditions = [
        // Rows
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        // Columns
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        // Diagonals
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];

    return winConditions.some(condition => 
        condition.every(([x, y]) => board[x][y] === currentPlayer)
    );
}

// Rock-Paper-Scissors
function startRockPaperScissors() {
    console.log("Starting Rock-Paper-Scissors...");
    const choices = ["Rock", "Paper", "Scissors"];
    const userChoice = prompt("Enter Rock, Paper, or Scissors:");
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (!choices.includes(userChoice)) {
        alert("Invalid choice! Please choose Rock, Paper, or Scissors.");
        return;
    }

    let result;
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    alert(`You chose ${userChoice}, computer chose ${computerChoice}. ${result}`);
}

// View Scores (dummy function for now)
function viewScores() {
    console.log("Viewing scores...");
    alert("Viewing scores...");
}

// Add Player (dummy function for now)
function addPlayer() {
    const playerName = prompt("Enter player name:");
    if (playerName) {
        console.log(`Player ${playerName} added.`);
        alert(`Player ${playerName} added.`);
    } else {
        alert("Player name cannot be empty.");
    }
}

// Multi-Threading Example (dummy function for now)
function startMultiThreadingExample() {
    console.log("Starting multi-threading example...");
    alert("Starting multi-threading example...");
}

// Chatbot Interaction (dummy function for now)
function useChatbot() {
    console.log("Using chatbot...");
    const response = prompt("Chatbot: Hello! How can I help you?");
    alert(`Chatbot says: ${response}`);
}
