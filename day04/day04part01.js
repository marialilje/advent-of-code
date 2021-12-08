const Board = require("./Board");
const fs = require("fs").promises;

const main = async () => {
  const data = await fs.readFile("input.txt");
  const bingoData = data
    .toString()
    .trim()
    .split(/\r\n|\r|\n/)
    .filter((line) => line.trim().length > 0);
  //console.log(bingoData);

  const bingoNumbers = bingoData[0].split(",").map((n) => parseInt(n));

  let boards = [];

  for (let i = 1; i < bingoData.length - 4; i += 5) {
    const board = [
      bingoData[i]
        .split(" ")
        .filter((line) => line.trim().length > 0)
        .map((number) => ({ value: parseInt(number), isMarked: false })),
      bingoData[i + 1]
        .split(" ")
        .filter((line) => line.trim().length > 0)
        .map((number) => ({ value: parseInt(number), isMarked: false })),
      bingoData[i + 2]
        .split(" ")
        .filter((line) => line.trim().length > 0)
        .map((number) => ({ value: parseInt(number), isMarked: false })),
      bingoData[i + 3]
        .split(" ")
        .filter((line) => line.trim().length > 0)
        .map((number) => ({ value: parseInt(number), isMarked: false })),
      bingoData[i + 4]
        .split(" ")
        .filter((line) => line.trim().length > 0)
        .map((number) => ({ value: parseInt(number), isMarked: false })),
    ];

    boards.push(new Board(board));
  }
  console.log(bingoNumbers);
  console.log(boards[0]);

  for (const numberCalled of bingoNumbers) {
    for (const board of boards) {
      board.markNumber(numberCalled);
      if (board.hasWon) {
        console.log(board.getScore(numberCalled));
        return;
      }
    }
  }
};

main();
A;
