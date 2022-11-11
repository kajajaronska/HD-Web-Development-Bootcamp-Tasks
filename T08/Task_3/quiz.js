// Declaring variables to store user's quiz & repeat answer
let userAnswer;
let userAgain;

do {
// Asking user for an aswer to a quiz question
  userAnswer = prompt(`What colour is the sky?
a. Purple
b. Pink
c. Blue
d. Yellow`);

// Exiting program if user gives a correct answer
  if (userAnswer === "c") {
    console.log("That's correct!");
    break;
  } else {

// Asking user if he wants to try again in an event of a wrong answer
    userAgain = prompt(`That’s incorrect! Would you like to try again? y/n:`);
  }

// Exiting program if user doesn't want to try again
  if (userAgain === "n") {
    console.log("OK, see you next time!");
    break;
  }

} while (userAnswer != "c");
