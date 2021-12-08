const { Console } = require("console");

class Board {
  hasWon = false;
  constructor(board) {
    this.board = board;
  }

  markNumber(numberSelected) {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j].value === numberSelected) {
          this.board[i][j].isMarked = true;

          let columnHasWon = true;
          let rowHasWon = true;

          for (let ii = 0; ii < 5; ii++) {
            columnHasWon = columnHasWon && this.board[ii][j].isMarked;
          }
          for (let jj = 0; jj < 5; jj++) {
            rowHasWon = rowHasWon && this.board[i][jj].isMarked;
          }
          this.hasWon = columnHasWon || rowHasWon;
        }
      }
    }
  }

  getScore(numberSelected) {
    let score = 0;
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (!this.board[i][j].isMarked) {
          score += parseInt(this.board[i][j].value);
        }
      }
    }
    const result = score * numberSelected;

    return `number selected: ${numberSelected}
    score: ${score}
    result: ${result}`;
  }
}

module.exports = Board;
