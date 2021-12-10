const fs = require("fs").promises;

const readIput = async () => {
  const data = await fs.readFile(`${__dirname}/input.txt`);
  return data
    .toString()
    .trim()
    .split(",")
    .map((number) => parseInt(number));
};

const part1 = async () => {
  return 0;
};
const part2 = async () => {
  return 0;
};

const main = async () => {
  const result1 = await part1();
  const result2 = await part2();
  console.log(`Day X:`, result1, result2);
};

main();
