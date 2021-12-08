const fs = require("fs").promises;
const Line = require("./Line");

const main = async () => {
  const data = await fs.readFile("input.txt");
  const ventCoordinates = data
    .toString()
    .trim()
    .split(/\r\n|\r|\n/)
    .filter((line) => line.trim().length > 0);
  console.log(ventCoordinates);

  let lines = [];

  for (let i = 0; i < ventCoordinates; i++) {
    const coordinateLine = ventCoordinates[i].split(",");
    lines.push(new Line(coordinateLine));
  }

  console.log(lines[0]);

  // const coordinateLine = ventCoordinates.split(",")
  // lines.push(new Line(coordinateLine))

  // const grid = [...Array(max.x + 1)].map((_) => Array(max.y + 1).fill(0));

  // const bingoNumbers = bingoData[0].split(",").map((n) => parseInt(n));

  // let boards = [];

  // for (let i = 1; i < bingoData.length - 4; i += 5) {
  //   const board = [
  //     bingoData[i]
  //       .split(" ")
  //       .filter((line) => line.trim().length > 0)
  //       .map((number) => ({ value: parseInt(number), isMarked: false })),
  //     bingoData[i + 1]
  //       .split(" ")
  //       .filter((line) => line.trim().length > 0)
  //       .map((number) => ({ value: parseInt(number), isMarked: false })),
  //     bingoData[i + 2]
  //       .split(" ")
  //       .filter((line) => line.trim().length > 0)
  //       .map((number) => ({ value: parseInt(number), isMarked: false })),
  //     bingoData[i + 3]
  //       .split(" ")
  //       .filter((line) => line.trim().length > 0)
  //       .map((number) => ({ value: parseInt(number), isMarked: false })),
  //     bingoData[i + 4]
  //       .split(" ")
  //       .filter((line) => line.trim().length > 0)
  //       .map((number) => ({ value: parseInt(number), isMarked: false })),
  //   ];

  //   boards.push(new Board(board));
  // }
  // console.log(bingoNumbers);
  // console.log(boards[0]);
  // let winningBoards = [];

  // for (const numberCalled of bingoNumbers) {
  //   for (const board of boards) {
  //     if (!board.hasWon) {
  //       board.markNumber(numberCalled);
  //       if (board.hasWon) {
  //         winningBoards.push({ board, score: board.getScore(numberCalled) });
  //       }
  //     }
  //   }
  // }
  // const lastBoard = winningBoards.pop();
  // console.log(`Length: ${winningBoards.length}
  //   ${lastBoard.score}
  //   ${JSON.stringify(lastBoard.board)}`);
  // console.log(lastBoard.score);
};

main();
