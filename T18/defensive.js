// Asking user to choose whether to calculate distance, time or speed
// let userChoice = prompt("Please choose whether you want to calculate distance, time or speed");

let userChoice = "speed";

while (true) {
  // let userChoice = prompt("Please choose whether you want to calculate distance, time or speed");
  let userChoice = "time";

// Scenario 1: DISTANCE
  if (userChoice === "distance") {
    // let time = Number(prompt("Please enter time in hours."));
    let time = 5;
    // let speed = Number(prompt("Please enter speed in km/h"));
    let speed = 50;

    console.log(`If you travel at ${speed}km/h for ${time} hours then your total distance will be ${speed * time}km.`);
    return;

// Scenario 2: TIME
  } else if (userChoice === "time") {
    // let distance = Number(prompt("Please enter the distance in kilometers."));
    let distance = 500;
    // let speed = Number(prompt("Please enter the speed in km/h"));
    let speed = 50;

    console.log(`If you travel ${distance}km at ${speed}km/h then it will take you ${distance / speed} hours.`);
    return;


// Scenario 3: SPEED
  } else if ( userChoice === "speed") {
    // let distance = Number(prompt("Please enter the distance in kilometers."));
    let distance = 500;
    // let time = Number(prompt("Please enter time in hours."));
    let time = 5;

    console.log(`If you travelled ${distance}km for ${time} hours then your speed was ${distance / time}km/h.`);
      return;

  }


}
