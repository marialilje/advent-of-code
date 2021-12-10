const fs = require("fs").promises;

const readIput = async () => {
  const data = await fs.readFile(`${__dirname}/input.txt`);
  return data
    .toString()
    .trim()
    .split(",")
    .map((number) => parseInt(number));
};

const calculateFuelSpent = (position, goal) => {
  return Math.abs(position - goal);
};

const part1 = async () => {
  const positions = await readIput();
  let fuelSpent = [];
  for (let pos = 0; pos < positions.length; pos++) {
    let total = 0;
    for (const position of positions) {
      total += calculateFuelSpent(position, positions[pos]);
    }
    fuelSpent.push(total);
  }
  const leastFuel = Math.min.apply(null, fuelSpent);
  return leastFuel;
};

const part2 = async () => {
  return 0;
};

const main = async () => {
  const result1 = await part1();
  const result2 = await part2();
  console.log(`Day 7:`, result1, result2);
};

main();
