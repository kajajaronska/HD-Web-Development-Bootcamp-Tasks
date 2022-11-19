// List of unicodes obtained from https://en.wikipedia.org/wiki/List_of_Unicode_characters

// Lowercase letters
// a = 97; z = 122

// Capital letters
// A = 65; Z = 90

// Ask user to input the message they would like to encode
let message = prompt(`Please enter the message you would like to encode.
N.B.This cypher program encodes only letters and spaces.`);


// Creating a function to encode user's message
function cypher(message) {
    // Create an array from user's string
    let messageArr = message.split("");

    //Create an empty array to store encoded characters
    let cypheredArr = [];

    // Creating helper function to push encoded character into cyphered array
    let pushFunc = (encoded) => {
        cypheredArr.push(String.fromCharCode(encoded))
    }

    //Loop through the user's string array
    messageArr.forEach(letter => {
        // Determine unicode of each character
        let unicode = Number(letter.charCodeAt(0))

        // Creating variable to store encoded letter on each loop
        let cypheredUnicode;

         // Accounting for capital letters
        if(unicode >= 65 && unicode <= 90) {
            if(unicode <= 75) {
                cypheredUnicode = unicode + 15;
                pushFunc(cypheredUnicode);
            } else {
                cypheredUnicode = 64 + (15 - (90 - unicode));
                pushFunc(cypheredUnicode);
            }
        // Accounting for lowercase letters 
        } else if (unicode >= 97 && unicode <= 122){
            if(unicode <= 107) {
                cypheredUnicode = unicode + 15;
                pushFunc(cypheredUnicode);
            } else {
                cypheredUnicode = 96 + (15 - (122 - unicode));
                pushFunc(cypheredUnicode);
            }

        // Accounting for space
        } else if(unicode === 32){
            pushFunc(32);
        
        // Pushing space to the message if user enters anything other than a letter or a space
        } else {
            pushFunc(32);
        }    
    })

    // Returning encoded message by joining array into a string
    return cypheredArr.join("");

}

//Calling and logging function for the user
console.log(cypher(message));
