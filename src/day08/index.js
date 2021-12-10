const fs = require("fs").promises;
const Signalpattern = require("./Signalpattern");

const readIput = async () => {
  const data = await fs.readFile(`${__dirname}/input.txt`);
  return (
    data
      .toString()
      .trim()
      .split(/\r\n|\r|\n/)
      //.trim()
      .map((string) => new Signalpattern(string))
  );
};

const part1 = async () => {
  const signalPatterns = await readIput();
  return signalPatterns;
};

const part2 = async () => {
  return 0;
};

const main = async () => {
  const result1 = await part1();
  const result2 = await part2();
  console.log(`Day 8:`, result1, result2);
};

main();
