// Creating the Shoes class
class Shoes {
  constructor(name, productCode, quantity, value) {
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.value = value;
    // Automatically adding each instance to the array
    shoesArr.push(this);
  }

  // Method changing property on the chosen instance of the Class
  editTheAttribute(attribute, newValue) {
    this[attribute] = newValue;
  }
}

// Creating an empty array
let shoesArr = [];

// Creating 5 instances of the Shoes class
let shoe1 = new Shoes("sneakers", "123V6", 124, "$50");
let shoe2 = new Shoes("high-heels", "563F7", 78, "$87");
let shoe3 = new Shoes("flip-flops", "601G0", 50, "$29");
let shoe4 = new Shoes("loafers", "246A1", 90, "$80");
let shoe5 = new Shoes("slippers", "335D6", 100, "$25");

// Method to search for any shoe within the array
let findShoes = (arr, shoeName) => {
  // Filtering shoes array by name to find shoes chosen by the user
  let found = arr.filter((el) => el["name"] === shoeName);

  // Creating easy to read output by looping through found array
  console.log(`Search keyword: ${shoeName}`);
  return found.forEach((element) => {
    console.log(
      `***************************\nProduct code: ${element.productCode}\nQuantity: ${element.quantity}\nValue: ${element.value}
    `
    );
  });
};

// Calling the findShoes function
findShoes(shoesArr, "sneakers");

// // Method to find a shoe with the lowest value per item
let lowestValue = (arr) => {
  // Using reduce method to boil down the array to the item with lowest value
  let lowest = arr.reduce((previous, current) => {
    // Using ternary operator
    return previous["value"] < current["value"] ? previous : current;
  });

  // // Creating easy to read output
  return console.log(
    `Lowest value item\n***************************\nName: ${lowest.name}\nProduct code: ${lowest.productCode}\nQuantity: ${lowest.quantity}\nValue: ${lowest.value}
    `
  );
};

// Calling the lowestValue function
lowestValue(shoesArr);

// // Method to find a shoe with the highest value per item
let highestValue = (arr) => {
  // Using reduce method to boil down the array to the item with highest value
  let highest = arr.reduce((previous, current) => {
    // Using ternary operator
    return previous["value"] > current["value"] ? previous : current;
  });

  // // Creating easy to read output
  return console.log(
    `Highest value item\n***************************\nName: ${highest.name}\nProduct code: ${highest.productCode}\nQuantity: ${highest.quantity}\nValue: ${highest.value}
        `
  );
};

// Calling the highestValue function
highestValue(shoesArr);

// Checking the edit method on the Shoes class
shoe1.editTheAttribute("name", "boots");
console.log(shoe1);

// Method to order all of the array objects in ascending order alphabetically 
let sortAscending = (arr) => arr.sort((currentShoe, nextShoe) => {
  if (currentShoe.name < nextShoe.name) return -1;
  if (currentShoe.name > nextShoe.name) return 1;

  return 0;
});

// Sorting shoes array objects in ascending order
console.log(sortAscending(shoesArr));