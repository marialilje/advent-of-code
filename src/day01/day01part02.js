var fs = require("fs").promises;

const main = async () => {
  const data = await fs.readFile("input.txt");
  const depths = data
    .toString()
    .split(/\r\n|\r|\n/)
    .map((line) => parseInt(line));
  console.log(depths);
  let counter = 0;
  let previousSum;

  for (let i = 0; i < depths.length; i++) {
    let depthOne = depths[i];
    let depthTwo = depths[i + 1];
    let depthThree = depths[i + 2];

    let sum = depthOne + depthTwo + depthThree;

    let currentSum = sum;

    if (currentSum > previousSum) {
      counter++;
    }

    previousSum = currentSum;
  }
  console.log(counter);
};

main();
