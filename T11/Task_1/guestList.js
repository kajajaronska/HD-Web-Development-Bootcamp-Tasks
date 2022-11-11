// Initiating array to store the guest list
let guestList = [];

while (true) {

    // Asking user to enter guest names up until 10 and populating guest list with them
    if (guestList.length < 10) {
      let guest = prompt("Who would you like to invite to the party? 🎉");
      guestList.push(guest);
  
      // Statement entered when guest list is full; breaking out of the loop
    } else {
        prompt("Who would you like to invite to the party? 🎉");
        alert("Sorry! You can invite a maximum of 10 people.");
        break;
    }
}

// Printing output for the user
console.log("🎇Your guest list:")
guestList.forEach(element => {
    console.log(element);
});




