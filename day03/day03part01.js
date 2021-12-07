var fs = require("fs").promises;

const main = async () => {
  const data = await fs.readFile("input.txt");
  const positions = data
    .toString()
    .trim()
    .split(/\r\n|\r|\n/);
  console.log(positions);

  let gammaRate = "";
  let epsilonRate = "";

  for (let i = 0; i < positions[0].length; i++) {
    let countZero = 0;
    let countOne = 0;
    for (let j = 0; j < positions.length; j++) {
      let currentCharacter = positions[j][i];

      if (currentCharacter === "1") {
        countOne++;
      } else {
        countZero++;
      }
    }
    if (countOne > countZero) {
      gammaRate += "1";
      epsilonRate += "0";
    } else {
      gammaRate += "0";
      epsilonRate += "1";
    }
    console.log(`0: ${countZero}  1: ${countOne}
    Gammarate: ${gammaRate} Epsilonrate: ${epsilonRate}`);
  }
  const gammaRateDecimal = parseInt(gammaRate, 2);
  const epsilonRateDecimal = parseInt(epsilonRate, 2);
  const multiplied = gammaRateDecimal * epsilonRateDecimal;

  console.log(
    `Gammarate: ${gammaRateDecimal} Epsilonrate: ${epsilonRateDecimal}
    Muliplied: ${multiplied}`
  );
};

main();
