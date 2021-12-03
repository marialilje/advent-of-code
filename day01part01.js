var fs = require("fs").promises;

const main = async () => {
  const data = await fs.readFile("input.txt");
  const depths = data
    .toString()
    .split(/\r\n|\r|\n/)
    .map((line) => parseInt(line));
  console.log(depths);
  let previousDepth = depths[0];
  let counter = 0;

  for (let i = 0; i < depths.length; i++) {
    let currentDepth = depths[i];

    if (currentDepth > previousDepth) {
      counter++;
    }

    previousDepth = currentDepth;
  }
  console.log(counter);
};

main();
