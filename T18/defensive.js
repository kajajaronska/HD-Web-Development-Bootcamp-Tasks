while (true) {
  try {
    // Asking user to choose what they want to calculate
    let userChoice = prompt(
      "Please choose whether you want to calculate distance, time or speed.💨"
    );

    // Throwing error when user doesn't enter anything
    if (userChoice == "") {
      throw "You need to choose something! Distance, time or travel? 🚗";
    }

    // Throwing error when user enters something else than available options
    let choiceArr = ["time", "distance", "speed"];
    if (!choiceArr.includes(userChoice)) {
      throw `Option "${userChoice}" is not available. Please choose between: distance, time and travel 🙌🏼`;
    }

    // Declaring variables
    let time, speed, distance;

    // Scenario 1: DISTANCE
    if (userChoice === "distance") {
      time = Number(prompt("Please enter time in hours."));

      // Prompting user once again if they enter something other than a number
      if (isNaN(time)) {
        time = Number(
          prompt(`${time} is not a number! Please enter time in hours.`)
        );
      }

      speed = Number(prompt("Please enter speed in km/h"));

      // Prompting user once again if they enter something other than a number
      if (isNaN(speed)) {
        speed = Number(
          prompt(`${speed} is not a number! Please enter speed in km/h.`)
        );
      }

      console.log(
        `If you travel at ${speed}km/h for ${time} hours then your total distance will be ${
          speed * time
        }km.`
      );
      break;

      // Scenario 2: TIME
    } else if (userChoice === "time") {
      distance = Number(prompt("Please enter the distance in kilometers."));

      // Prompting user once again if they enter something other than a number
      if (isNaN(distance)) {
        distance = Number(
          prompt(
            `${distance} is not a number! Please enter distance in kilometers.`
          )
        );
      }

      speed = Number(prompt("Please enter the speed in km/h"));

      // Prompting user once again if they enter something other than a number
      if (isNaN(speed)) {
        speed = Number(
          prompt(`${speed} is not a number! Please enter speed in km/h.`)
        );
      }

      console.log(
        `If you travel ${distance}km at ${speed}km/h then it will take you ${
          distance / speed
        } hours.`
      );
      break;

      // Scenario 3: SPEED
    } else if (userChoice === "speed") {
      distance = Number(prompt("Please enter the distance in kilometers."));

      // Prompting user once again if they enter somethign other than a number
      if (isNaN(distance) || distance == null) {
        distance = Number(
          prompt(
            `${distance} is not a number! Please enter distance in kilometers.`
          )
        );
      }

      time = Number(prompt("Please enter time in hours."));

      // Prompting user once again if they enter somethign other than a number
      if (isNaN(time)) {
        time = Number(
          prompt(`${time} is not a number! Please enter time in hours.`)
        );
      }

      console.log(
        `If you travelled ${distance}km for ${time} hours then your speed was ${
          distance / time
        }km/h.`
      );
      break;
    }
  } catch (err) {
    alert(err);
  }
}
