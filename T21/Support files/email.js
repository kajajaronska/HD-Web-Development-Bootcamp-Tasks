// An Email Simulation
// Creating Email class
class Email {
  constructor(fromAddress, emailContents) {
    this.fromAddress = fromAddress;
    this.emailContents = emailContents;
    this.hasBeenRead = false;
    this.isSpam = false;
  }

  // Function updating hasBeenRead to true
  markAsRead() {
    this.hasBeenRead = true;
  }

  // Function updating isSpam to true
  markAsSpam() {
    this.isSpam = true;
  }
}

// Creating a class for e-mails sent out
class EmailSent {
  constructor(toAddress, emailContents) {
    this.toAddress = toAddress;
    this.emailContents = emailContents;
  }
}

// Empty array to store e-mails
let inbox = [];

// Empty array to store sent e-mails
let outbox = [];

// Creating few e-mails inside the inbox to test the functions with
inbox.push(
  new Email(
    "info@plantshop.com",
    "ORDER NUMBER: 567341\n\nThank you for purchasing cacti from us!\nE-mail with delivery details will follow shortly!\n\nHave a fab day\nPlant Shop 🪴"
  )
);
inbox.push(
  new Email(
    "mark.smith@techagency.com",
    "Hello Kaja!\n\nThank you for showing your interest in the Junior Software Engineer position at the Tech Agency.\nWe are currently reviewing your aplication and will be in touch shortly.\n\nBest regards,\nMark Smith"
  )
);
inbox.push(
  new Email(
    "mark.smith@techagency.com",
    "Hello Kaja!\n\nCongratulations! You have progressed to the next stage of your application. E-mail with details of the technical assesment will follow shortly!\n\nCongratulations 🎉\nMark Smith"
  )
);

// Creating received email to test addEmail function with
let incomingFromAddress = "hello@canva.com";
let incomingEmailContents =
  "Hello Kaja!\nThank you for creating your account with Canva.\nWe cannot wait to see what you design.\nHappy designing!🎨\nTeam @ Canva";

// Function to add email to inbox
let addEmail = (fromAddress, emailContents) => {
  inbox.push(new Email(fromAddress, emailContents));
};

// Function to return number of messages stores in the inbox
let getCount = (inbox) => {
  alert(`You have ${inbox.length} e-mails in your inbox 📫📫📫`);
};

// Function to return contents of an email in the inbox
let getEmail = (inbox) => {
  7;
  // Asking user to input an index of the email
  let index = Number(
    prompt("Please enter index of the e-mail you would like to see.")
  );

  // Catching an error if user enters invalid e-mail index
  while (!inbox[index - 1]) {
    index = prompt(
      `You seem to only have ${inbox.length} e-mails. Please enter the valid index of the e-mail you would like to see.`
    );
  }

  // Marking e-mail as read
  inbox[index - 1].markAsRead();

  // Outputting e-mail contents for the user
  return console.log(
    `___________________\nE-mail received from: ${
      inbox[index - 1].fromAddress
    }\n\nContents:\n${inbox[index - 1].emailContents}`
  );
};

// Function to return a list of all the e-mails that haven't been read
let getunreadEmails = (inbox) => {
  // Creating array with unread e-mails
  let unreadEmails = inbox.filter((email) => email.hasBeenRead === false);

  // Looping through unread e-mails array to display for the user and mark each e-mail as read
  console.log("---Unread e-mails---");
  return unreadEmails.forEach((el) => {
    console.log(
      `___________________\nE-mail received from: ${el.fromAddress}\nContents:${el.emailContents}`
    );
    el.hasBeenRead === true;
  });
};

// Function to return a list of all e-mails that have been marked as spam
let getSpamEmails = (inbox) => {
  // Creating array with spam e-mails
  let spamEmails = inbox.filter((email) => email.isSpam === true);

  // Looping through spam emails array to display for the user and mark each e-mail as read
  console.log("---Spam e-mails---");
  return spamEmails.forEach((el) => {
    console.log(
      `___________________\nE-mail received from: ${el.fromAddress}\nContents:${el.emailContents}`
    );
    el.hasBeenRead === true;
  });
};

// Function to allow user to delete an email at the specified index
let deleteEmail = (inbox) => {
  // Asking user to input an index of the email
  let index = Number(
    prompt("Please enter index of the e-mail you would like to delete.")
  );

  // Catching an error if user enters invalid e-mail index
  while (!inbox[index - 1]) {
    index = prompt(
      `You seem to only have ${inbox.length} e-mails. Please enter the valid index of the e-mail you would like to delete.`
    );
  }

  // Deleting specified email
  inbox.splice([index - 1], 1);

  return console.log("Specified e-mail has been successfully removed ");
};

// Function to send e-mail
let sendEmail = (address, content) => {
  outbox.push(new EmailSent(address, content));

  alert(
    `The following e-mail has been sent successfully:\n_____________________\nAddress: ${address}\nContent: ${content}`
  );
};

userChoice = "";
while (userChoice != "9") {
  userChoice = prompt(
    "What would you like to do:\n1. Read email\n2. Mark spam\n3. Send email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. Check number of e-mails in your inbox\n8. Check incoming e-mail 📩\n9. quit?"
  );
  // ***READ EMAIL***
  if (userChoice == "1") {
    getEmail(inbox);

    // ***MARK SPAM***
  } else if (userChoice == "2") {
    // Asking user to enter the index of the email they would like to mark as spam
    let index = Number(
      prompt("Plase specify which e-mail you would like to mark as spam")
    );

    // Catching an error if user enters invalid e-mail index
    while (!inbox[index - 1]) {
      index = prompt(
        `You seem to only have ${inbox.length} e-mails. Please enter the valid index of the e-mail you would like to mark as spam.`
      );
    }

    // Marking specified email as spam
    inbox[index - 1].markAsSpam();

    // ***SEND EMAIL***
  } else if (userChoice == "3") {
    let address = prompt("Please enter recipients e-mail address:");
    let content = prompt("E-mail content:");

    sendEmail(address, content);

    // ***DELETE EMAIL***
  } else if (userChoice == "4") {
    deleteEmail(inbox);

    // ***VIEW SPAM EMAILS***
  } else if (userChoice == "5") {
    getSpamEmails(inbox);

    // ***VIEW UNREAD EMAILS***
  } else if (userChoice == "6") {
    getunreadEmails(inbox);

    //***GET NUMBER OF EMAILS***
  } else if (userChoice == "7") {
    getCount(inbox);

    //***CHECK INCOMING E-MAIL***
  } else if (userChoice == "8") {
    let choice = prompt(
      "You have one e-mail hanging. Do you want to add it to your inbox? y/n"
    );

    if (choice === "y") {
      addEmail(incomingFromAddress, incomingEmailContents);
      alert("This e-mail has been added to your inbox.");
    } else {
      console.log("No problem! We will destroy this e-mail right away 🔥");
    }

    //***QUIT***
  } else if (userChoice == "9") {
    console.log("Goodbye");
  } else {
    console.log("Oops - incorrect input");
  }
}
