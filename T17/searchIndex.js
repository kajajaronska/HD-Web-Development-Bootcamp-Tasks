let searchIndex = function(array, word) {

    // Base case: word is found or the array is finished 
    if(array[array.length - 1] === word) {
        console.log("word was found at index" + (array.length - 1))
        let indexFound = array.length - 1;
        return indexFound;
    // Base case 2: the array is finished and word was not found
    } else if (array.length === 0){
        console.log("word was not found at all" + array)
        return -1;
    // Recursive call: continue searching through the array
    } else {
        array.pop();
        console.log(`Word not found at this position; current array: ${array}`)
        return searchIndex(array,word);
    };   

    // if(array[array.length - 1] === word) {
    //     console.log(`Word was found at position ${array.length - 1}`);
    //     return (array.length - 1);
    // } else {
    //     console.log("else statement");
    //     // return;
    // }




};

let dataArray = ["java", "html", "javascripts", "css"];

console.log(searchIndex(dataArray, "html"));
console.log(dataArray);