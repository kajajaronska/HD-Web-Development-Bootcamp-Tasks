// Creating a super class for Employee
class Employee {

    constructor(name, currency, baseSalary) {
        this.name = name;
        this.currency = currency;
        this.baseSalary = baseSalary;
    }

}

// Creating subclass for each employment type

// 1. Salaried employees
class SalariedEmployee extends Employee{

    constructor(name, currency, baseSalary) {
        super(name,currency,baseSalary)
    }

    // Adding a constant attribute to the class
    typeOfEmployment = "salary";

    // Method to calculate month's salary taking this month's target and sales as arguments
    calcPayout(target,sales){
        let payout,description;
        if(sales > target) {
           payout = this.baseSalary * 1.1;
           description = `${this.name} hit ${this.currency}${sales} sales this month, which was higher than their target of ${this.currency}${target}.\nTherefore their base salary of ${this.currency}${this.baseSalary} has been increased by 10% 🎉`
        } else {
            payout = this.baseSalary;
            description = description = `${this.name} made ${this.currency}${sales} sales this month, which was not higher than their target of ${this.currency}${target}.\nTherefore their base salary of ${this.currency}${this.baseSalary} remains unchanged.`;
        }

        return console.log(`Name: ${this.name}\nEmployee type: ${this.typeOfEmployment}\nBase salary: ${this.currency}${this.baseSalary}\nTarget: ${this.currency}${target}\nSales: ${this.currency}${sales}\nPayout:${this.currency}${payout}\nCalculations explained: ${description}`)
    }
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

// Creating Salaried Employees instances
let paulSmith = new SalariedEmployee("Paul Smith", "£", 2000);
let meganDolly = new SalariedEmployee("Megan Dolly", "£", 2200);

console.log(paulSmith);

paulSmith.calcPayout(30000,20000);
meganDolly.calcPayout(10000,100000);
