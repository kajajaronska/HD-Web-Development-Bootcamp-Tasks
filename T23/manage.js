// create super class for employee; attributes: name, typeOfEmployment, payout, currency
// create subclass for each employee type; attributes: description, calculation method;
// create two instances per each 

// Creating a super class for Employee
class Employee {

    constructor(name, typeOfEmployment, currency, salary) {
        this.name = name;
        this.typeOfEmployment = typeOfEmployment;
        this.currency = currency;
        this.salary = salary;
    }
    
}