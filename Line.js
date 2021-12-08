class Line {
  constructor(lineContent) {
    this.lineContent = lineContent;
  }

  max() {
    let maxX = 0;
    let maxY = 0;
    return {
      x: maxX,
      y: maxY,
    };
  }
}

module.exports = Line;
