// Code here for Compulsory Task 1

// setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 0;

//create the logic needed in the setInterval() function for
//incrementing the counter and outputting to the console
let startCounter = function () {
  //check if interval is already in place
  if (!intervalID) {
    intervalID = setInterval(logCounter, 1000);
  }
};

// function to log and increase the counter by 1 on each execution
const logCounter = () => {
  counter++;
  console.log(counter);
};

function stopCounter() {
  // add the logic required to stop the counter
  // using clearInterval()

  // cancel setInterval and set intervalID to null
  clearInterval(intervalID);
  intervalID = null;
  counter = 0; // bring counter back to zero to resume the counter from the start
}

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

// the event listener is missing a callback function argument
// this button should start the outputting of the counter to the console
startButton.addEventListener("click", startCounter);

// the event listener is missing a callback function argument
// this button should the counter from outputting to the console
stopButton.addEventListener("click", stopCounter);
