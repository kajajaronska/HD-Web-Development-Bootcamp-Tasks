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

console.log(`The lowest number on your list is: ${lowest} with an index of ${userNumbers.indexOf(lowest)}.`);

///////////////////////////////////////////////////////////
// Finding average of all numbers and logging it for the user
let average = (total/userNumbers.length).toFixed(2);

console.log(`Average of all your numbers is ${average}.`);

///////////////////////////////////////////////////////////
// Finding median value of all numbers and logging it for the user

function median(arr) {
    // Sorting numbers from smallest to largest
    let sorted = [...arr].sort((a,b) => a - b);

    // User's array is fixed to 10 elements, so to calculate median we have to take an average of 5th and 6th element
    return (sorted[4]+sorted[5])/2;
}

console.log(`Median number of your list is ${median(userNumbers)}.`);