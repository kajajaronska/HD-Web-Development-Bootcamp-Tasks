// Create main number
let mainNum = 5;

//  Looping through 10 numbers without an inner function
// const loopThroughTen = num => {
//     for (let i=0; i <= 10; i++) {
//         console.log(`${num} * ${i} = ${num * i}`);
//     }
// }

// loopThroughTen(mainNum);

//  Looping through 10 number using inner function
function loopThroughTen(num) {
    // Creating and returning inner function performing the loop
    return function innerFunc() {
        for(let i=0; i <= 10; i++) {
            console.log(`${num} * ${i} = ${num * i}`)
        }
    }

}

// Creating variable, which stores the callback of main function
let output = loopThroughTen(10);

// Calling above variable to log results in the console
output();

