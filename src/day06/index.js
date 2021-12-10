const fs = require("fs").promises;
const _ = require("lodash");

const readIput = async () => {
  const data = await fs.readFile(`${__dirname}/input.txt`);
  return data
    .toString()
    .trim()
    .split(",")
    .map((number) => parseInt(number));
};

const part1 = async () => {
  let fish = await readIput();
  console.log(fish);

  for (let day = 0; day < 80; day++) {
    let newFish = [];
    for (let timer of fish) {
      if (timer === 0) {
        newFish.push(6);
        newFish.push(8);
      } else {
        newFish.push(timer - 1);
      }
    }
    fish = newFish;
  }

  return fish.length;
};

const part2 = async () => {
  let fish = await readIput();
  let result = 0;

  const calculate = _.memoize(
    calculatePopulationImpact,
    (fish, days) => `${fish}|${days}`
  );
  for (const aFish of fish) {
    result += calculate(aFish, 256, calculate);
  }

  return result;
};

const calculatePopulationImpact = (fish, days, calculate) => {
  if (days <= fish) {
    return 1;
  }
  const daysRemainingAfterBirth = days - fish - 1;
  return (
    calculate(6, daysRemainingAfterBirth, calculate) +
    calculate(8, daysRemainingAfterBirth, calculate)
  );
};

const main = async () => {
  const result1 = await part1();
  const result2 = await part2();
  console.log(`Day 6:`, result1, result2);
};

main();
