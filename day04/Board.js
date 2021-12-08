const { Console } = require("console");

class Board {
  hasWon = false;
  #boardCells;
  constructor(boardCells) {
    this.#boardCells = boardCells;
  }

  markNumber(numberSelected) {
    if (this.hasWon) return;

    for (let i = 0; i < this.#boardCells.length; i++) {
      for (let j = 0; j < this.#boardCells[i].length; j++) {
        if (this.#boardCells[i][j].value === numberSelected) {
          this.#boardCells[i][j].isMarked = true;

          let columnHasWon = true;
          let rowHasWon = true;

          for (let ii = 0; ii < 5; ii++) {
            columnHasWon = columnHasWon && this.#boardCells[ii][j].isMarked;
          }
          for (let jj = 0; jj < 5; jj++) {
            rowHasWon = rowHasWon && this.#boardCells[i][jj].isMarked;
          }
          this.hasWon = columnHasWon || rowHasWon;
        }
      }
    }
  }

  getScore(numberSelected) {
    let score = 0;
    for (let i = 0; i < this.#boardCells.length; i++) {
      for (let j = 0; j < this.#boardCells[i].length; j++) {
        if (!this.#boardCells[i][j].isMarked) {
          score += parseInt(this.#boardCells[i][j].value);
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
