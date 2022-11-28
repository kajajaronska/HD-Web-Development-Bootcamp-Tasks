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
let shoe1 = new Shoes("loafers", "123V6", 124, "$50");
let shoe2 = new Shoes("boots", "563F7", 78, "$87");
let shoe3 = new Shoes("flip-flops", "601G0", 50, "$29");
let shoe4 = new Shoes("sneakers", "246A1", 90, "$80");
let shoe5 = new Shoes("slippers", "335D6", 100, "$25");


console.log(Shoes);
console.log(shoesArr);