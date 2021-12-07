var fs = require("fs").promises;

const main = async () => {
  const data = await fs.readFile("input.txt");
  const bingoData = data
    .toString()
    .trim()
    .split(/\r\n|\r|\n/)
    .filter((line) => line.trim().length > 0);
  //console.log(bingoData);

  const bingoNumbers = bingoData[0].split(",").map((n) => parseInt(n));

  const bingo = (board, currentPosition) => {};
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

    boards.push(board);
  }
  console.log(bingoNumbers);
  console.log(boards[0]);

  bingoNumbers.forEach((numberCalled) => {
    for (let i = 0; i < boards.length; i++) {
      for (let j = 0; j < boards[i].length; j++) {
        for (let k = 0; k < boards[i][j].length; k++) {
          let currentBoard = boards[i];
          let currentRow = boards[i][j];
          let currentNumber = boards[i][j][k];

          if (currentNumber.value === numberCalled) {
            currentNumber.isMarked = true;
          }

          if (bingo(currentBoard, currentNumber)) {
            console.log("bingo");
          }
        }
      }
    }
  });
  console.log(boards[4]);

  // const createNewBoard = (number) => {
  //   for (let i = 0; i < 5; i++) {
  //     for (let j = 0; j < 5; j++) {
  //       {
  //         number: number,
  //         position: [i][j],
  //         selected: false,
  //       };
  //     }
  //   }
  // };
  // const saveNumbers = (board, numbers) => {};
};

main();
