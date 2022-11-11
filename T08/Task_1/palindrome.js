// Asking user to enter their chosen word and converting it to lowercase
let userWord = prompt(
  "Hey! Enter any word and this program will check if it is a palindrome 🛸"
).toLowerCase();

// Counter variable and isPalindrome variable to hold boolean value depending on the result
let i = 1;
let isPalindrome;

// While loop determining whether word is a palindrome
while (i <= Math.floor(userWord.length / 2)) {
  if (userWord[i - 1] === userWord[userWord.length - i]) {
    i++;
    isPalindrome = true;
  } else {
    isPalindrome = false;
    break;
  }
}

// Printing output for the user
if (isPalindrome) {
  console.log(`Looks like your word "${userWord}" IS a palindrome! 👏🏼`);
} else {
  console.log(
    `Looks like your word "${userWord}" is NOT a palindrome! Try again!`
  );
}
