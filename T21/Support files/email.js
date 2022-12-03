// An Email Simulation
/*
create your email class here
*/

// Creating Email class
class Email {
	constructor(fromAddress, emailContents){
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

// Empty array to store e-mails
let inbox = [];

// Creating few e-mails inside the inbox to test functions with
inbox.push(new Email("info@plantshop.com","ORDER NUMBER: 567341\n\nThank you for purchasing cacti from us!\nE-mail with delivery details will follow shortly!\nHave a fab day\nPlant Shop 🪴"))
inbox.push(new Email("mark.smith@techagency.com","Hello Kaja!\nThank you for showing your interest in the Junior Software Engineer position at the Tech Agency.\n We are currently reviewing your aplication and will be in touch shortly.\nBest regards,\nMark Smith"))

// Creating received email to test addEmail function with
let incomingFromAddress = "hello@canva.com";
let incomingEmailContents = "Hello Kaja!\nThank you for creating your account with Canva.\nWe cannot wait to see what you design.\nHappy designing!🎨\nTeam @ Canva"


// Function to add email to inbox
let addEmail = (fromAddress, emailContents) => {
	inbox.push(new Email(fromAddress,emailContents));
}

// Function to return number of messages stores in the inbox
let getCount = (inbox) => {
	return alert(`You have ${inbox.length} e-mails in your inbox`);
}

// Function to return contents of an email in the inbox
let getEmail = (inbox) => {
	// Asking user to input an index of the email
	let index = prompt("Please enter index of the e-mail you would like to see.");
	
	// Marking e-mail as read
	inbox[i].markAsRead();
	
	// Outputting e-mail contents for the user
	return console.log(`___________________\nE-mail received from: ${inbox[i].fromAddress}\nContents:${inbox[i].emailContents}`);
};

// Function to return a list of all the e-mails that haven't been read
let getunreadEmails = (inbox) => {
	// Creating array with unread e-mails
	let unreadEmails = inbox.filter((email) => email.hasBeenRead === false);

	// Looping through unread e-mails array to display for the user and mark each e-mail as read
	console.log("---Unread e-mails---")
	return unreadEmails.forEach(el => {
		console.log(`___________________\nE-mail received from: ${el.fromAddress}\nContents:${el.emailContents}`)
		el.hasBeenRead === true;
	});
}

// Function to return a list of all e-mails that have been marked as spam
let getSpamEmails = (inbox) => {
	// Creating array with spam e-mails
	let spamEmails = inbox.filter((email)=> email.isSpam === true);

	// Looping through spam emails array to display for the user and mark each e-mail as read
	console.log("---Spam e-mails---")
	return spamEmails.forEach(el => {
		console.log(`___________________\nE-mail received from: ${el.fromAddress}\nContents:${el.emailContents}`)
		el.hasBeenRead === true;
	})
}

// Function to allow user to delete an email at the specified index
let deleteEmail = (inbox) => {
	// Asking user to input an index of the email
	let index = prompt("Please enter index of the e-mail you would like to delete.");
	
	// Deleting specified email
	delete inbox[index];

	return console.log("Specified e-mail has been successfully removed ");
}

userChoice = "";
while(userChoice != "7"){
	userChoice = prompt("What would you like to do:\n 1. Read email\n 2. Mark spam\n3. Send email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. quit?");
	if(userChoice == "1"){
		//	Place your logic here
	}else if(userChoice == "2"){
		//	Place your logic here
	}else if(userChoice == "3"){
		//	Place your logic here
	}else if(userChoice == "4"){
		//	Place your logic here
	}else if(userChoice == "5"){
		//	Place your logic here
	}else if(userChoice == "6"){
		//	Place your logic here
	}else if(userChoice == "7"){
		console.log("Goodbye");
	}else{
		console.log("Oops - incorrect input");
		
	}
}