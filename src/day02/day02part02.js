var fs = require("fs").promises;

const main = async () => {
  const data = await fs.readFile("input.txt");
  const movements = data
    .toString()
    .split(/\r\n|\r|\n/)
  console.log(movements);

  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < movements.length; i++) {
    const direction = movements[i].split(' ');
    const directionIncrease = parseInt(direction[1]);

    switch(direction[0]) {
      case "forward":
        horizontalPosition+= directionIncrease;
        depth += (aim*directionIncrease);
        break;
        case "down":
        aim += directionIncrease;
        break;
        case "up": 
        aim -= directionIncrease;
        break;
    }
  }

  const finalAnswer = horizontalPosition * depth;

  console.log(`Horizontal position is: ${horizontalPosition}
  Depth is: ${depth}
  and multiplied they are: ${finalAnswer}`)

};

main();
