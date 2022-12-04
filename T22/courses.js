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

    constructor(courseName, contactWebsite, subjectName, price, length, studentsPerClass) {
        // super() method
        super(courseName, contactWebsite);

        this.subjectName = subjectName;
        this.price = price;
        this.length = length;
        this.studentsPerClass = studentsPerClass;
    }

    displayCourseDetails() {
        console.log(`Subject ${this.subjectName} belongs to course ${this.courseName}.\nIt will last for ${this.length} weeks and a price tag is ${this.price}.\nYou can find more information on ${this.contactWebsite}`)
    }
}

// cookery pastry, foodprepr, vegan dishes,
// attributes: price, length (weeks), main_techaer, numperclass 