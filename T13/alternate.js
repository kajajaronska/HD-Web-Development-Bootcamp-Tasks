alternativeString = (myString) => {
    // Turning string into array of character using built in split() method
    let myStringArr = myString.split("");

    // For loop, which changes every second character of an array to uppercase starting from index 0
    for(let i=0; i < myStringArr.length; i = i + 2) {
        myStringArr[i] = myStringArr[i].toUpperCase();
    }
    
    // For loop, which changes every second character of an array to uppercase starting from index 1
    for(let i=1; i < myStringArr.length; i = i + 2) {
        myStringArr[i] = myStringArr[i].toLowerCase();
    }

    // Converting array into string using join() method and returning the output
    return myStringArr.join("");
}

// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "Hello World",
    "Hello",
    "HELLO",
    "Software Engineering is Fun",
    "I like Javascript",
    "clown case"
]

let correctStrings = [ 
    "HeLlO WoRlD",
    "HeLlO",
    "HeLlO",
    "SoFtWaRe eNgInEeRiNg iS FuN",
    "I LiKe jAvAsCrIpT",
    "ClOwN CaSe"
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = alternativeString(test);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}
