var fs = require("fs").promises;

const main = async () => {
  const data = await fs.readFile("input.txt");
  const bingoData = data
    .toString()
    .trim()
    .split(/\r\n|\r|\n/)
    .filter((line) => line.length > 0);
  console.log(bingoData);

  const bingoNumbers = bingoData[0].split(",").map((n) => parseInt(n));

  let boards = [];

  for (let i = 1; bingoData.length - 4; i += 5) {
    const board = [
      bingoData[i]
        .split(" ")
        .map((number) => ({ value: parseInt(number), isMarked: false })),
      bingoData[i + 1]
        .split(" ")
        .map((number) => ({ value: parseInt(number), isMarked: false })),
      bingoData[i + 2]
        .split(" ")
        .map((number) => ({ value: parseInt(number), isMarked: false })),
      bingoData[i + 3]
        .split(" ")
        .map((number) => ({ value: parseInt(number), isMarked: false })),
      bingoData[i + 4]
        .split(" ")
        .map((number) => ({ value: parseInt(number), isMarked: false })),
    ];
    console.log(board);
  }

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
