// Asking user to input a random number
let userNum = Number(prompt("Hey there! Enter any number you like 🍭!"));

switch (true) {
  // Checking if number is divisable by 7 and 11
  case !(userNum % 7) && !(userNum % 11):
    console.log(`${userNum} is divisable by both 7 and 11.`);
    break;

  // Checking if number is divisable by 7 only
  case !(userNum % 7):
    console.log(`${userNum} is divisable by 7.`);
    break;

  // Checking if number is divisable by 11 only
  case !(userNum % 11):
    console.log(`${userNum} is divisable by 11.`);
    break;

  // Defaulted output if user's number is not divisible by neither 7 nor 11
  default:
    console.log(`${userNum} is divisible by neither 7 nor 11.`);
    break;
}
