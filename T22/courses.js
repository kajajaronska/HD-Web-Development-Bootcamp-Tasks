// Creating class Courses 
class Courses {

    constructor(courseName, contactWebsite){
        this.courseName = courseName;
        this.contactWebsite = contactWebsite;
    }

    // Method to display contact website
    displayWebsite() {
        console.log(this.contactWebsite);
    }

}

// Creatings subclass Subjects from Courses class
class Subjects extends Courses {

    constructor(courseName, contactWebsite, price, length, studentsPerClass) {
        // super() method
        super(courseName, contactWebsite);

        this.price = price;
        this.length = length;
        this.studentsPerClass = studentsPerClass;
    }
}

// cookery pastry, foodprepr, vegan dishes,
// attributes: price, length (weeks), main_techaer, numperclass 