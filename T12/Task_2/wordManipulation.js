//////////////////////////////////////////////////////////
// Asking the user to input desired word
let userWord = prompt("Hey! Go ahead and enter your word:");
console.log(`Your word is: ${userWord}.`);

//////////////////////////////////////////////////////////
// Creating function with every second character replaced with a "!"

function exclamation(word) {
  // Since string are immutable I need to split a string into an array of characters
  let wordArr = word.split("");

  // Looping through array of characters to replace every second one with a "!"
  for (let i = 0; i < wordArr.length; i += 2) {
    wordArr.splice(i, 1, "!");
  }

  // Returning joined word out of the function
  return wordArr.join("");
}

// Calling the function whilst logging output to the user
console.log(
  `Your word with every second character as "!": ${exclamation(userWord)}.`
);

//////////////////////////////////////////////////////////
// Creating function to reverse user's word

function reversed(word) {
  // Creating an array from user's word
  let wordArr = word.split("");
  // Reversing elements in that array
  wordArr.reverse();

  // Returning array's elements joined into a string
  return wordArr.join("");
}

// Calling the function whilst logging output to the user
console.log(`Your word reversed: ${reversed(userWord)}.`);

//////////////////////////////////////////////////////////
// Creating function to change every 6th letter of the word to uppercase

function everySixth(word) {
  // Creating an array from user's word
  let wordArr = word.split("");
  for (let i = 0; i < wordArr.length; i += 6) {
    wordArr.splice(i, 1, wordArr[i].toUpperCase());
  }

  // Returning array's elements joined into a string
  return wordArr.join("");
}

// Calling the function whilst logging output to the user
console.log(`Your word with every 6th letter made uppercase: ${everySixth(userWord)}.`);

//////////////////////////////////////////////////////////
// Creating function to create an array storing ascii values for each character in user's word

function asciiChar(word) {
    // Creating an array from user's word and an empty array to store ascii values
    let wordArr = word.split("");
    let asciiCharArr = [];

    // Looping through the word array and adding ascii value for each element to the new array
    wordArr.forEach(el => {
        asciiCharArr.push(el.charCodeAt(0));
    });

    // Returning array with ascii values
    return asciiCharArr;
}

// Calling the function whilst logging output to the user
console.log(`An array containing ascii values from your word: ${asciiChar(userWord)}.`);

