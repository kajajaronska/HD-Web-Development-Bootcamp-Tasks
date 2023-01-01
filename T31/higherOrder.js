// Create myFilterFunction HOF with two arguments:
// 1. arr  - array of strings with 10 words, where at least 3 of the words have 6 letters
// 2. filterWords - callback function returning true boolean value if word has more than 6 letters


let myFilterFunction = arr => filterWords => {
    const filteredArr = []; // Create a new array to store filtered values

    // Loop through passed array (arr) and pass each element to the filterWords callback function
    for(let i =0; i < arr.length; i++) {
        let output = filterWords(arr[i]); //  output variable takes returned boolean value from the filterWords function

        if(output) filteredArr.push(arr[i]); // if output is true push array element to the filteredArr
    
    }

    //Return filtered array
    return filteredArr;
    
}

// Function to check whether passed word has six letters and returning boolean based on this condition
const filterWords = word => {
    if (word.length > 6) return true;
    else return false;
}


let randomWords = ['became', 'arrow', 'article', 'therefore', 'army', 'beautiful', 'became', 'if', 'actually', "giraffe"]

const outputArr = myFilterFunction(randomWords)(filterWords); // array outputArr has the same reference point as filteredArr array within myFilterFunction

// Log output to the console
console.log(outputArr);