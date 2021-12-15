const fs = require("fs").promises;
const Decoder = require("./Decoder");

const readIput = async () => {
  const data = await fs.readFile(`${__dirname}/input.txt`);
  return data
    .toString()
    .trim()
    .split(/\r\n|\r|\n/)
    .map((line) => {
      const parts = line.split("|");
      const pattern = parts[0].trim().split(" ");
      const output = parts[1].trim().split(" ");
      return {
        pattern,
        output,
      };
    });
};

const part1 = async () => {
  const signalPatterns = await readIput();
  const isMatch = new Set([2, 3, 4, 7]);

  return signalPatterns.reduce(
    (count, pattern) =>
      count + pattern.output.filter((n) => isMatch.has(n.length)).length,
    0
  );
};

const part2 = async () => {
  const signalPatterns = await readIput();
  for (const { pattern, output } of signalPatterns) {
    const decoder = new Decoder();
    for (const number of [...pattern, ...output]) {
      decoder.addNumber(number);
    }

    decoder.output.solve();
    console.log("DECODER", decoder.isComplete());
  }
  return 0;
};

const main = async () => {
  const result1 = await part1();
  const result2 = await part2();
  console.log(`Day 8:`, result1, result2);
};

main();
