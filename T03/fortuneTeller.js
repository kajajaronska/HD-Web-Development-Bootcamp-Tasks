let mothersFirstName = prompt("Please enter your mother's first name:");
let childhoodStreet = prompt("Please enter the name of the street you grew up on:");
let favColour = prompt("Now tell us your favourite colour:");
let currentAge = prompt("How old are you?");
let chosenNum = prompt("Lastly, please choose a number between 1 and 10:");

console.log(`
✨🔮Are you ready to hear about your future?🔮✨

In ${chosenNum} years you are going to meet your best friend named ${mothersFirstName} ${childhoodStreet}.
You will get married in ${Math.round(currentAge/chosenNum)} years and have ${currentAge % chosenNum} children.
In ${currentAge - chosenNum} years you are going to dye your hair ${favColour}.`)