// This example program is meant to demonstrate errors.
 
// There are some errors in this program, try run the program by pressing F5.
// Now look at the error messages and find and fix the errors.

// SYNTAX ERROR - Lion is not defined as it is meant to be a string
// Adding string around Lion
let animal = "Lion";

// SYNTAX ERROR - incorrect indentation
let animalType = "cub";
let numberOfTeeth = 16;
let numberOfLegs = "4";

// SYNTAX ERROR - missing 'let' keyword and incorrect use of template literal
// RUNTIME ERROR | REFERENCE ERROR - incorrect variables are referenced
// LOGICAL ERROR - numberOfTeeth and animalType should be swapped over
let fullSpec = `This is a ${animal}. It is a ${animalType} and it has ${numberOfTeeth} teeth.`;

// LOGICAL ERROR - if statement condition reassigns value of numberOfLegs variable to 3. 
// It should use equal operator instead
if (numberOfLegs == 3) {

// SYNTAX ERROR - missing brackets
// RUNTIME ERROR | REFERENCE ERROR - incorrect variable name referenced
console.log(fullSpec);
}
