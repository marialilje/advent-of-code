const fs = require("fs").promises;
const Line = require("./Line");
const Grid = require("../common/Grid");

const readIput = async () => {
  const data = await fs.readFile(`${__dirname}/input.txt`);
  return data
    .toString()
    .trim()
    .split(/\r\n|\r|\n/)
    .filter((line) => line.trim().length > 0)
    .map((line) => new Line(line));
};

const part1 = async () => {
  const lines = (await readIput()).filter((line) => !line.isDiagonal);

  let maxX = lines[0].from.x;
  let maxY = lines[0].from.y;
  for (const line of lines) {
    if (maxX < line.from.x) {
      maxX = line.from.x;
    }
    if (maxX < line.to.x) {
      maxX = line.to.x;
    }
    if (maxY < line.from.y) {
      maxY = line.from.y;
    }
    if (maxY < line.to.y) {
      maxY = line.to.y;
    }
  }

  console.log(maxX, maxY);

  const grid = Grid.create(maxX + 1, maxY + 1, 0);
  console.log("GRID", grid.width, grid.height);
  console.log("LINES", lines.length, lines[0].coordinates.length);

  for (const line of lines) {
    for (const coord of line.coordinates) {
      let cellValue = grid.getValue(coord);
      grid.setValue(coord, cellValue + 1);
    }
  }
  let count = 0;
  let count2 = 0;

  for (const coordinate of grid.coordinates) {
    if (grid.getValue(coordinate) > 1) {
      count++;
      //console.log(count);
    } else {
      count2++;
      //console.log(count2);
    }
  }

  console.log(count);
  console.log(count2);
  console.log(grid.coordinates.length);

  return count;
};

const part2 = async () => {
  const lines = await readIput();

  let maxX = lines[0].from.x;
  let maxY = lines[0].from.y;
  for (const line of lines) {
    if (maxX < line.from.x) {
      maxX = line.from.x;
    }
    if (maxX < line.to.x) {
      maxX = line.to.x;
    }
    if (maxY < line.from.y) {
      maxY = line.from.y;
    }
    if (maxY < line.to.y) {
      maxY = line.to.y;
    }
  }

  const grid = Grid.create(maxX + 1, maxY + 1, 0);

  for (const line of lines) {
    for (const coord of line.coordinates) {
      let cellValue = grid.getValue(coord);
      grid.setValue(coord, cellValue + 1);
    }
  }
  let count = 0;

  for (const coordinate of grid.coordinates) {
    if (grid.getValue(coordinate) > 1) {
      count++;
    }
  }

  console.log(count);
  console.log(grid.coordinates.length);

  return count;
};

const main = async () => {
  const result1 = await part1();
  const result2 = await part2();
  console.log(`Day 5:`, result1, result2);
};

main();
