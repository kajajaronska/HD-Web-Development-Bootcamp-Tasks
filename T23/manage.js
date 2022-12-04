// Creating a super class for Employee
class Employee {

    constructor(name, currency, salary) {
        this.name = name;
        this.currency = currency;
        this.salary = salary;
    }

}

// Creating subclass for each employment type

// 1. Salaried employees
class SalariedEmployee extends Employee{

    constructor(name, currency, salary,) {
        super(name,currency,salary)
    }

    // Adding a constant attribute to the class
    typeOfEmployment = "salary";
}

// 2. Hourly employees
class HourlyEmployee extends Employee{

    constructor(name, currency, salary,) {
        super(name,currency,salary)
    }

    // Adding a constant attribute to the class
    typeOfEmployment = "hourly";
}

// 3. Hourly employees
class HybridEmployee extends Employee{

    constructor(name, currency, salary,) {
        super(name,currency,salary)
    }

    // Adding a constant attribute to the class
    typeOfEmployment = "hybrid";
};

