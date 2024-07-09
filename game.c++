#include <iostream>
#include <vector>
#include <array>
#include <algorithm>

extern "C" {

    std::vector<std::vector<char>> board(3, std::vector<char>(3, ' '));
    char currentPlayer;
    bool gameActive;

    void initializeGame() {
        board = {
            {' ', ' ', ' '},
            {' ', ' ', ' '},
            {' ', ' ', ' '}
        };
        currentPlayer = 'X';
        gameActive = true;
    }

    void makeMove(int row, int col) {
        if (gameActive && board[row][col] == ' ') {
            board[row][col] = currentPlayer;
            if (checkWin()) {
                gameActive = false;
                std::cout << currentPlayer << " wins!" << std::endl;
            } else if (std::all_of(board.begin(), board.end(), [](const std::vector<char>& row) {
                return std::all_of(row.begin(), row.end(), [](char cell) {
                    return cell != ' ';
                });
            })) {
                gameActive = false;
                std::cout << "It's a tie!" << std::endl;
            } else {
                currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
            }
        }
    }

    bool checkWin() {
        const std::array<std::array<std::pair<int, int>, 3>, 8> winConditions = {{
            // Rows
            {{{0, 0}, {0, 1}, {0, 2}}},
            {{{1, 0}, {1, 1}, {1, 2}}},
            {{{2, 0}, {2, 1}, {2, 2}}},
            // Columns
            {{{0, 0}, {1, 0}, {2, 0}}},
            {{{0, 1}, {1, 1}, {2, 1}}},
            {{{0, 2}, {1, 2}, {2, 2}}},
            // Diagonals
            {{{0, 0}, {1, 1}, {2, 2}}},
            {{{0, 2}, {1, 1}, {2, 0}}}
        }};

        for (const auto& condition : winConditions) {
            if (board[condition[0].first][condition[0].second] != ' ' &&
                board[condition[0].first][condition[0].second] == board[condition[1].first][condition[1].second] &&
                board[condition[0].first][condition[0].second] == board[condition[2].first][condition[2].second]) {
                return true;
            }
        }
        return false;
    }
}
