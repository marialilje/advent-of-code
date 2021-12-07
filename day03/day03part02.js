var fs = require("fs").promises;

const main = async () => {
  const data = await fs.readFile("input.txt");
  const diagnosticReport = data
    .toString()
    .trim()
    .split(/\r\n|\r|\n/);
  console.log(diagnosticReport);

  let gammaRate = "";
  let epsilonRate = "";

  let oxygenGenRating = diagnosticReport;
  let co2ScrubberRating = diagnosticReport;

  for (let i = 0; i < diagnosticReport[0].length; i++) {
    if (oxygenGenRating.length > 1) {
      let onesOxygen = [];
      let zeroesOxygen = [];
      for (let j = 0; j < oxygenGenRating.length; j++) {
        let currentCharacter = oxygenGenRating[j][i];

        if (currentCharacter === "1") {
          onesOxygen.push(oxygenGenRating[j]);
        } else {
          zeroesOxygen.push(oxygenGenRating[j]);
        }
      }
      if (onesOxygen.length < zeroesOxygen.length) {
        gammaRate += "0";
        epsilonRate += "1";
        oxygenGenRating = zeroesOxygen;
      } else {
        gammaRate += "1";
        epsilonRate += "0";
        oxygenGenRating = onesOxygen;
      }
      console.log(`0: ${zeroesOxygen.length}  1: ${onesOxygen.length}
    Gammarate: ${gammaRate} Epsilonrate: ${epsilonRate}
    Oxygenrating: ${oxygenGenRating}`);
    }
    if (co2ScrubberRating.length > 1) {
      let onesCo2 = [];
      let zeroesCo2 = [];
      for (let j = 0; j < co2ScrubberRating.length; j++) {
        let currentCharacter = co2ScrubberRating[j][i];

        if (currentCharacter === "1") {
          onesCo2.push(co2ScrubberRating[j]);
        } else {
          zeroesCo2.push(co2ScrubberRating[j]);
        }
      }

      if (onesCo2.length < zeroesCo2.length) {
        co2ScrubberRating = onesCo2;
      } else {
        co2ScrubberRating = zeroesCo2;
      }
      console.log(`0: ${zeroesCo2.length}  1: ${onesCo2.length}
  Co2 Scrubber Rating: ${co2ScrubberRating}`);
    }
  }
  const gammaRateDecimal = parseInt(gammaRate, 2);
  const epsilonRateDecimal = parseInt(epsilonRate, 2);
  const multiplied = gammaRateDecimal * epsilonRateDecimal;

  const oxygenRate = parseInt(oxygenGenRating[0], 2);
  const co2Rate = parseInt(co2ScrubberRating[0], 2);

  const lifeSupportRating = oxygenRate * co2Rate;

  console.log(
    `Gammarate: ${gammaRateDecimal} Epsilonrate: ${epsilonRateDecimal}
    Muliplied: ${multiplied}
    OxygenRating: ${oxygenRate}
    Co2 Scrubber Rating: ${co2Rate}
    Life support rating: ${lifeSupportRating}`
  );
};

main();
