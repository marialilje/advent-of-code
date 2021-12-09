class Line {
  coordinates = [];
  isHorizontal = false;
  isVertical = false;

  constructor(lineContent) {
    const coordinates = lineContent.split(" -> ");
    const from = coordinates[0].split(",").map((n) => parseInt(n));
    const to = coordinates[1].split(",").map((n) => parseInt(n));
    this.from = {
      x: from[0],
      y: from[1],
    };
    this.to = {
      x: to[0],
      y: to[1],
    };

    if (this.from.y === this.to.y) {
      this.isHorizontal = true;
      for (
        let x = Math.min(this.from.x, this.to.x);
        x <= Math.max(this.from.x, this.to.x);
        x++
      ) {
        this.coordinates.push({
          x,
          y: this.from.y,
        });
      }
    }

    if (this.from.x === this.to.x) {
      this.isVertical = true;
      for (
        let y = Math.min(this.from.y, this.to.y);
        y <= Math.max(this.from.y, this.to.y);
        y++
      ) {
        this.coordinates.push({
          x: this.from.x,
          y,
        });
      }
    }
  }
}

module.exports = Line;
