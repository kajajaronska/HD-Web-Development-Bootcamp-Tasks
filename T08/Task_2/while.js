// Asking user to enter a number 
let userNum = Number(prompt("Please enter any number:"));

// Variables to hold sum and counter of how many numbers user entered
let sum = 0;
let counter = 0;

// While loop entered only if user's number is NOT -1
while (userNum != -1) {
    sum += userNum;
    counter++;
    userNum = Number(prompt("Please enter any number:"));
}

// Outputing the average of the numbers user entered
console.log(`You have entered ${counter} numbers with a sum of ${sum}.
This gives an average of ${sum / counter}.`);