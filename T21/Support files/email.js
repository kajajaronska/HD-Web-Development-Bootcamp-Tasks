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