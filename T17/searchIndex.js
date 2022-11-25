let searchIndex = function(array, word) {

    // Base case: checking if the last element of the array equals word
    if(array[array.length - 1] === word) {
        return (array.length - 1);

    // Base case 2: shallow copy of new array is empty, which means word was not found
    } else if (array.length === 0) {
        return -1;

    // Recursive call
    } else {
        // Creating a shallow copy of the original array and removing the last element
        newArray = array.slice(0,-1)
        // Calling function on the shallow copy newArray
        return searchIndex(newArray, word);
    }
};

let dataArray = ["java", "html", "javascripts", "css"];

console.log(searchIndex(dataArray, "javascripts"));
