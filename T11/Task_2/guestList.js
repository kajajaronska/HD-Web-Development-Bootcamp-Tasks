// Initiating array to store the guest list
let guestList = [];

// Entering a loop
while (true) {
  // Asking user to enter guest names up until 10 and populating guest list with them
  if (guestList.length < 10) {
    let guest = prompt("Who would you like to invite to the party? 🎉");
    guestList.push(guest);

    // Statement entered when guest list is full
  } else {
    let guest11 = prompt("Who would you like to invite to the party? 🎉");
    let replace = prompt(
      "You have already added 10 people to your guest list. Would you like to replace someone on the list with this person? y/n:"
    );

  // Statement entered if user wants to replace someone from the guest list
    if (replace === "y") {
      console.log(`Current guest list: ${guestList}`);
      let replacement = prompt(`Who would you like to replace?`);
      let replacementIndex = guestList.indexOf(replacement);

    // Replacing the guest and breaking out of the while loop
      guestList.splice(replacementIndex, 1, guest11);
      break;

    // Statement entered when user doesn't want to replace anyone; breaking out of the while loop
    } else {
      break;
    }
  }
}

// Printing output for the user
console.log("🎇Your guest list:");
guestList.forEach((element) => {
  console.log(element);
});
