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
}

// Creating an empty array
let shoesArr = [];

// Creating 5 instances of the Shoes class
let shoe1 = new Shoes("sneakers", "123V6", 124, "$50");
let shoe2 = new Shoes("high-heels", "563F7", 78, "$87");
let shoe3 = new Shoes("flip-flops", "601G0", 50, "$29");
let shoe4 = new Shoes("sneakers", "246A1", 90, "$80");
let shoe5 = new Shoes("slippers", "335D6", 100, "$25");

// Method to search or any shoe within the array
let findShoes = (arr, shoeName) => {
  // Filtering shoes array by name to find shoes chosen by the user
  let found = arr.filter((el) => el["name"] === shoeName);

  // Creating easy to read output by looping through found array
  console.log(`Search keyword: ${shoeName}`);
  return found.forEach((element) => {
    console.log(
    `***************************\nProduct code: ${element.productCode}\nQuantity: ${element.quantity}\nValue: ${element.value}
    `);
  });
};

console.log(findShoes(shoesArr, "sneakers"));

// // Method to find a shoe with the lowest value per item
// let lowestValue = shoesArr.reduce((previous,current) => {
//     return previous["value"] < current["value"] ? previous : current;
// });

// console.log(lowestValue);

// for(property in lowestValue) {
//     console.log(`${property}: ${lowestValue[property]}`);
// };

// console.dir(shoesArr);
