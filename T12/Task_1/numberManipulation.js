///////////////////////////////////////////////////////////
// Creating an array to store user's 10 chosen numbers 
let userNumbers = [];

while(userNumbers.length < 10) {
    let userNum = Number(prompt("Please choose 10 numbers:"));
    userNumbers.push(userNum);
}

console.log(`These are your chosen numbers: ${userNumbers}.`);

///////////////////////////////////////////////////////////
// Finding total of all numbers and outputting it for the user
let total = 0;

userNumbers.forEach(num => {
    total += num;
})

console.log(`Total of all your numbers is: ${total}.`);

///////////////////////////////////////////////////////////
// Finding index of the maximum value and logging it for the user using for loop
let highest = Math.max(...userNumbers);

console.log(`The highest number on your list is: ${highest} with an index of ${userNumbers.indexOf(highest)}.`);

///////////////////////////////////////////////////////////
// Finding index of the minimum value and logging it for the user
let lowest = Math.min(...userNumbers);

console.log(`The highest number on your list is: ${lowest} with an index of ${userNumbers.indexOf(lowest)}.`);

///////////////////////////////////////////////////////////
// Finding average of all numbers and logging it for the user
let average = (total/userNumbers.length).toFixed(2);

console.log(`Average of all your numbers is ${average}`);

