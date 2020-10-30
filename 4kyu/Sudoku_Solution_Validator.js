/*

https://www.codewars.com/kata/529bf0e9bdf7657179000008

Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true
 */

function validSolution(board){
    let resultArr = [];
    let verticalArr = [[], [], [], [], [], [], [], [], []];
    let checkArr = [];
    for (let i = 0; i < 9; i++) {
        board.map(el => verticalArr[i].push(el[i]));
    }
    for (let i = 0; i < 9; i++) {
        if (board[i].reduce((acc, cur) => acc + cur) === 45 && verticalArr[i].reduce((x, b) => x + b) === 45) {resultArr.push(1);
        } else {resultArr.push(0);}
        for (let c = 0; c < 9; c = c + 3) {checkArr = []
            checkArr = checkArr.concat(board[c].slice(c, c + 3))
            checkArr = checkArr.concat(board[c + 1].slice(c, c + 3))
            checkArr = checkArr.concat(board[c + 2].slice(c, c + 3))
            if (checkArr.reduce((acc, cur) => acc + cur) === 45) {resultArr.push(1);
            } else {resultArr.push(0)}
        }

    } return !resultArr.includes(0);
}