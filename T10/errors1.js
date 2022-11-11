// This example program is meant to demonstrate errors.
 
// There are some errors in this program.
// Now look at the error messages and find and fix the errors.

// SYNTAX ERROR - Missing brackets
console.log ("Welcome to the error program"); 

// SYNTAX ERROR - Missing brackets
// RUNTIME ERROR | REFERENCE ERROR using console.log starting with a capital letter
// Also fixed indentation
console.log("\n"); 

// SYNTAX ERROR - using equality operator instead of an assignment operator
// Fixed indentation and removed everything apart from "24" to enable further calculations
let ageStr = "24"; 

// RUNTIME ERROR | REFERENCE ERROR - Integer is not a method, changed to Number()
// RUNTIME ERROR | REFERENCE ERROR - age was not intialised, added keyword let before
// Fixed indentation
let age = Number(ageStr);

// LOCGICAL ERROR - program outputs incorrect statement in English "I'm24years old."
// Changed to the template literal and fixed indentation
console.log(`I'm ${age} years old`);

let three = "3";

// LOGICAL ERROR - answerYears will output "243", because age is a number and three is a string.
// Converted variable to a number using Number() method and fixed indentation
let answerYears = age + Number(three);

// SYNTAX ERROR - missing brackets 
// LOGICAL ERROR - answerYears is a variable, so shouldn't be in quotation marks as that way it is treated as a string
// Used template literal to fix this line
console.log(`The total number of years: ${answerYears}`);

// RUNTIME ERROR | REFERENCE ERROR - answer variable is not defined. Adding "let" keyoward to create a variable.
// Judging by the HINT we need asnweYears in this equation and addition of 6 months to arrive at 330
let answerMonths = (answerYears * 12) + 6

// SYNTAX ERROR - missing brackets 
// Changed to template literal for ease
console.log(`In 3 years and 6 months, I'll be ${answerMonths} months old.`);

//HINT, 330 months is the correct answer