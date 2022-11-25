let reverseSent = function(sentence, position) {
    // Base case: checking if current (position - 1) is lower or equal to 0. We want to exit this loop by returning string at position 0.
    if((position - 1) <= 0) {
        return sentence[position - 1];
    // Recursive call: returns character at (position - 1)  and calls function again with a second argument reduced by 1
    } else {
        return sentence[position - 1] + reverseSent(sentence,(position - 1))
    }
}

let string = "dog";
console.log(reverseSent(string, string.length));

let longerString = "What an amazing day!";
console.log(reverseSent(longerString,longerString.length));




