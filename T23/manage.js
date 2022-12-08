// Creating a super class for Employee
class Employee {

    constructor(name, currency, sales, target) {
        this.name = name;
        this.currency = currency;
        this.sales = sales;
        this.target = target;
    }

}

// Creating subclass for each employment type

// 1. Salaried employees
class SalariedEmployee extends Employee{
    constructor(name, currency,sales, target, baseSalary) {
        super(name,currency, sales, target)

        this.baseSalary = baseSalary;
    }

    // Adding a constant attribute to the class
    typeOfEmployment = "salary";

    // Method to calculate month's salary taking this month's target and sales as arguments
    calcPayout(){
        let payout,description;
        if(this.sales > this.target) {
           payout = this.baseSalary * 1.1;
           description = `${this.name} hit ${this.currency}${this.sales} sales this month, which was higher than their target of ${this.currency}${this.target}.\nTherefore their base salary of ${this.currency}${this.baseSalary} has been increased by 10% 🎉`
        } else {
            payout = this.baseSalary;
            description = `${this.name} made ${this.currency}${this.sales} sales this month, which was not higher than their target of ${this.currency}${this.target}.\nTherefore their base salary of ${this.currency}${this.baseSalary} remains unchanged.`;
        }

        return console.log(`Name: ${this.name}\nEmployee type: ${this.typeOfEmployment}\nBase salary: ${this.currency}${this.baseSalary}\nTarget: ${this.currency}${this.target}\nSales: ${this.currency}${this.sales}\nPayout: ${this.currency}${payout}\nCalculations explained: ${description}`)
    }
}

// 2. Hourly employees
class HourlyEmployee extends Employee{

    constructor(name, currency, sales, target, hourlyRate) {
        super(name, currency, sales, target)
        
        this.hourlyRate = hourlyRate;

    }

    // Adding a constant attribute to the class
    typeOfEmployment = "hourly";

    calcPayout(hoursLogged) {
        let payout, description;

        if(this.sales > this.target) {
            payout = hoursLogged * (this.hourlyRate * 1.5); 
            description = `${this.name} hit ${this.currency}${this.sales} sales this month, which was higher than their target of ${this.currency}${this.target}.\nTherefore their hourly rate of ${this.currency}${this.hourlyRate} has been increased by 50% 🎉`
        } else {
            payout = hoursLogged * this.hourlyRate;
            description = `${this.name} made ${this.currency}${this.sales} sales this month, which was not higher than their target of ${this.currency}${this.target}.\nTherefore their hourly rate of ${this.currency}${this.hourlyRate} remains unchanged.`;
        }

        return console.log(`Name: ${this.name}\nEmployee type: ${this.typeOfEmployment}\nHourly rate: ${this.currency}${this.hourlyRate}\nHours Logged: ${hoursLogged}\nTarget: ${this.currency}${this.target}\nSales: ${this.currency}${this.sales}\nPayout: ${this.currency}${payout}\nCalculations explained: ${description}`);
    }
}

// 3. Hybrid employees
class HybridEmployee extends Employee{

    constructor(name, currency, sales, target, baseSalary, hourlyRate) {
        super(name,currency,sales, target)
        
        this.baseSalary = baseSalary;
        this.hourlyRate = hourlyRate;
    
    }

    // Adding a constant attribute to the class
    typeOfEmployment = "hybrid";

    calcPayout(additionalHours = 0) {
        let payout, description;

        if(this.sales > this.target) {
            payout = this.baseSalary + (additionalHours * (this.hourlyRate * 1.2))
            description = `${this.name} hit ${this.currency}${this.sales} sales this month, which was higher than their target of ${this.currency}${this.target}.\nTherefore their hourly rate of ${this.currency}${this.hourlyRate} has been increased by 20% 🎉`
        } else {
            payout = this.baseSalary + (additionalHours * this.hourlyRate);
            description = `${this.name} made ${this.currency}${this.sales} sales this month, which was not higher than their target of ${this.currency}${this.target}.\nTherefore their hourly rate of ${this.currency}${this.hourlyRate} remains unchanged.`;
        }

        return console.log(`Name: ${this.name}\nEmployee type: ${this.typeOfEmployment}\nBase salary: ${this.currency}${this.baseSalary}\nHourly rate: ${this.currency}${this.hourlyRate}\nAdditional hours: ${additionalHours}\nTarget: ${this.currency}${this.target}\nSales: ${this.currency}${this.sales}\nPayout: ${this.currency}${payout}\nCalculations explained: ${description}`);
    }
};

// Creating Salaried Employees instances
let paulSmith = new SalariedEmployee("Paul Smith", "£", 20000, 30000, 2000);
let meganDolly = new SalariedEmployee("Megan Dolly", "£", 100000, 1000, 2200);

// paulSmith.calcPayout();
// meganDolly.calcPayout();

// Creating Hourly employees instances
let johnSteal = new HourlyEmployee("John Steal", "$", 30000, 60000, 15);
let benWarrington = new HourlyEmployee("Ben Warrington", "$", 1000, 500, 10);


// johnSteal.calcPayout(210);
// benWarrington.calcPayout(160);

// Creating Hybrid employees instances
let agataLocke = new HybridEmployee("Agata Locke", "PLN", 60000, 100000, 4500, 30)
let michaelGregor = new HybridEmployee("Michael Gregor", "£", 120000, 50000, 5000, 40);

agataLocke.calcPayout();
michaelGregor.calcPayout(10);

