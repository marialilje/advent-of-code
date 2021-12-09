class Grid {
  #grid;

  constructor(grid) {
    this.#grid = grid;
    this.height = grid[0].length;
    this.width = grid.length;
    this.coordinates = [];
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        this.coordinates.push({
          x,
          y,
        });
      }
    }
  }

  static create(width, height, seedValue) {
    const grid = [...Array(width)].map((_) => Array(height).fill(seedValue));
    return new Grid(grid);
  }

  setValue({ x, y }, value) {
    this.#grid[x][y] = value;
  }

  getValue({ x, y }) {
    return this.#grid[x][y];
  }
}

module.exports = Grid;
