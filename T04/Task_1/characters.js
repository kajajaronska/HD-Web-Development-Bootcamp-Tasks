// Asking the user for an input
let userChoice = prompt("Hey you! Please enter an uppercase letter, a lowercase letter or a number 👌🏼");


// Checking if user's input is a string
if (isNaN(Number(userChoice))) {

    // Checking for a special character 
    if(userChoice.toLowerCase() == userChoice.toUpperCase()) {
        console.log(`${userChoice} is not a letter or a number.`);

    // Checking for a lowercase
    } else if(userChoice == userChoice.toLowerCase()) {
        console.log(`${userChoice} is a lowercase letter.`);

    // If above conditions are false letter is uppercase
    } else {
        console.log(`${userChoice} is an uppercase letter.`);
    }    

// Output for when user's choice is a number
} else {
    console.log(`${userChoice} is a number.`);
}


