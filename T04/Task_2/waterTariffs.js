// Asking user to enter their usage and determine indigent household status
let userUsage = Number(prompt("Hey! Please enter your water usage in litres 🌊."));
let isIndigentQ = prompt(
  `Qualifying for the indigent household relief?
Enter yes or no.`
);

let isIndigent;

// Determing the indigent household status based on user's answer
if(isIndigentQ === "yes") {
    isIndigent = true;
} else {
    isIndigent = false;
}

// Converting user's usage to kl
let klUsage = userUsage / 1000;

// Creating a variable to store the water bill sum with an initial value of 0
let waterBill = 0;

// Entering a loop to calculate the bill depending on the usage
while (klUsage > 0) {

  // Tier 4 - usage > 35kl costs R69.76/kl
  if (klUsage > 35) {
    waterBill += (klUsage - 35) * 69.76;
    klUsage -= klUsage - 35;

    // Tier 3 - usage > 10.5kl and usage <= 35kl costs R31.77/kl
  } else if (klUsage > 10.5 && klUsage <= 35) {
    waterBill += (klUsage - 10.5) * 31.77;
    klUsage -= klUsage - 10.5;

    // Tier 2 - usage > 6kl and usage <= 10.5kl costs R22.38
  } else if (klUsage > 6 && klUsage <= 10.5) {
    // Checking if user is from indigent household and breaking out of the loop if true
    if (isIndigent) {
      break;
    } else {
      waterBill += (klUsage - 6) * 22.38;
      klUsage -= klUsage - 6;
    }

    // Tier 1 - usage < 6kl costs R15.73
  } else {
    // Checking if user is from indigent household and breaking out of the loop if true
    if (isIndigent) {
      break;
    } else {
      waterBill += 15.73 * klUsage;
      klUsage = 0;
    }
  }
}

// Outputing total water bill amount depending on the indigent household status
if(isIndigent) {
    console.log(`Based on your indigent household status and your usage of ${userUsage} litres your bill comes up to R${waterBill.toFixed(2)} 💸.`);
} else {
    console.log(`Based on your usage of ${userUsage} litres and your bill comes up to R${waterBill.toFixed(2)} 💸.`);
}


