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