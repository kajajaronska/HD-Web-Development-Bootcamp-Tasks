// Asking the user to choose starting temperature metric
let startMetric = prompt(`In which metric is the temperature you are converting?
C - Celsius
F - Fahrenheit
K - Kelvin

Please type the chosen metric letter below.`);

// Asking the user to input number they want to convert
let userNum = Number(
  prompt(`Please enter the number you would like to convert.`)
);

// Asking the user to choose conversion metric
let conversionMetric =
  prompt(`To which metric would you like to convert the temperature?
C - Celsius
F - Fahrenheit
K - Kelvin

Please type the chosen metric letter below.`);

// Variable to hold output of the temperature conversion
let convertedTemp;

// Switch statement to convert temperatures
switch (startMetric) {

  // Converting from Celcius
  case "C":
    switch (conversionMetric) {
      // Converting C to K
      case "K":
        convertedTemp = userNum + 273.15;
        break;

      // Converting C to F
      case "F":
        convertedTemp = userNum * (9 / 5) + 32;
        break;

      case "C":
        convertedTemp = userNum;
        break;

      default:
        console.log(
          "Looks like some of the metrics you chosen are not right. Please start over 🙏🏼."
        );
    }
    break;

  // Converting from Kelvin
  case "K":
    switch (conversionMetric) {
      // Converting K to C
      case "C":
        convertedTemp = userNum - 273.15;
        break;

      // Converting K to F
      case "F":
        convertedTemp = userNum * (9 / 5) - 459.67;
        break;
        
      case "K":
        convertedTemp = userNum;
        break;

      default:
        console.log(
          "Looks like some of the metrics you chosen are not right. Please start over 🙏🏼."
        );
    }
    break;

  // Converting from Fahrenheit
  case "F":
    switch (conversionMetric) {
      // Converting F to C
      case "C":
        convertedTemp = (userNum - 32) * (5 / 9);
        break;

      // Converting F to K
      case "K":
        convertedTemp = (userNum + 459.67) * (5 / 9);
        break;

      case "F":
        convertedTemp = userNum;
        break;

      default:
        console.log(
          "Looks like the conversion metric you chose doesn't exist in this program. Please start over 🙏🏼."
        );
    }
    break;

  default:
    console.log(
      "Looks like the starting metric you chose doesn't exist in this program. Please start over 🙏🏼."
    );
}

// If statements to add symbol for F and C metrics
if(conversionMetric === "F" || conversionMetric === "C") {
    conversionMetric = `°${conversionMetric}`;
}

if (startMetric === "F" || startMetric === "C")  {
    startMetric = `°${startMetric}`;
}


// Printing output for the user
console.log(`${userNum}${startMetric} is ${convertedTemp.toFixed(2)}${conversionMetric}`);

