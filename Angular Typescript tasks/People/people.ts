abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: string[];

    constructor(
        name: string,
        age: number,
    ) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        let currentTask = this.tasks.shift();
        if (!currentTask) return;
        this.tasks.push(currentTask);

        console.log(`${this.name} ${currentTask}`);
    }

    public getSalary(): number {
        return this.salary;
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
}

class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push('is working on a simple task.');
    }
}

class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push('is working on a complicated task.');
        this.tasks.push('is taking time off work.');
        this.tasks.push('is supervising junior workers.');
    }
}

class Manager extends Employee {
    public dividend: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.dividend = 0;
        this.tasks.push('scheduled a meeting.');
        this.tasks.push('is preparing a quarterly report.');
    }

    public getSalary(): number {
        return this.salary + this.dividend;
    }
}

let junior = new Junior("Pesho", 20);
junior.salary = 2000;

let senior = new Senior("Maryika", 31);
senior.salary = 4000;

let manager = new Manager("Gosho", 40);
manager.salary = 6000;
manager.dividend = 1000;

junior.work();  // Pesho is working on a simple task.
junior.work();  // Pesho is working on a simple task.

senior.work();   // Maryika is working on a complicated task.
senior.work();   // Maryika is taking time off work.

manager.work();  // Gosho scheduled a meeting.
manager.work();  // Gosho is preparing a quarterly report.

junior.collectSalary();  // Pesho received 2000 this month.
senior.collectSalary();   // Maryika received 4000 this month.
manager.collectSalary();  // Gosho received 7000 this month.


