// Creating variable to store 5 cars in the array
let vehicles = ["Honda", "BMW", "Mercedes", "Skoda", "Porsche"];

// Creating variable to store my favourite vehicle
let myFavVehicle = "BMW";

// Looping through vehicles and printing output according to the if else statement result
for (let i = 0; i < vehicles.length; i++) {

    if(vehicles[i] === myFavVehicle) {
        console.log(`The ${vehicles[i]} IS my favourite vehicle`)
    } else {
        console.log(`The ${vehicles[i]} is not my favourite vehicle`)
    }

}

