// Creating class Courses
class Courses {
  constructor(courseName, contactWebsite) {
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
  constructor(
    courseName,
    contactWebsite,
    subjectName,
    price,
    numOfClasses,
    studentsPerClass
  ) {
    // super() method
    super(courseName, contactWebsite);

    this.subjectName = subjectName;
    this.price = price;
    this.numOfClasses = numOfClasses;
    this.studentsPerClass = studentsPerClass;
  }

  displayCourseDetails() {
    console.log(
      `Subject ${this.subjectName} belongs to the ${this.courseName} course.\nThere will be ${this.numOfClasses} classes in total with ${this.studentsPerClass} students per class and the price tag is ${this.price}.\nYou can find more information on ${this.contactWebsite}.`
    );
  }
}

// Creating 3 instances of Subjects class

let pastryMaking = new Subjects("Culinary Arts", "www.cookery-school.com","Pastry Making", "£100", 5, 10);
let foodPrep = new Subjects("Culinary Arts", "www.cookery-school.com","Food Preparation","£99", 5, 12);
let veganDishes = new Subjects("Culinary Arts", "www.cookery-school.com","Vegan Dishes","£120", 10, 20);

// Testing methods
pastryMaking.displayCourseDetails();
foodPrep.displayCourseDetails();
veganDishes.displayWebsite();