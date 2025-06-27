var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }
    Employee.prototype.work = function () {
        var currentTask = this.tasks.shift();
        if (!currentTask)
            return;
        this.tasks.push(currentTask);
        console.log("".concat(this.name, " ").concat(currentTask));
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.collectSalary = function () {
        console.log("".concat(this.name, " received ").concat(this.getSalary(), " this month."));
    };
    return Employee;
}());
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push('is working on a simple task.');
        return _this;
    }
    return Junior;
}(Employee));
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push('is working on a complicated task.');
        _this.tasks.push('is taking time off work.');
        _this.tasks.push('is supervising junior workers.');
        return _this;
    }
    return Senior;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.dividend = 0;
        _this.tasks.push('scheduled a meeting.');
        _this.tasks.push('is preparing a quarterly report.');
        return _this;
    }
    Manager.prototype.getSalary = function () {
        return this.salary + this.dividend;
    };
    return Manager;
}(Employee));
var junior = new Junior("Pesho", 20);
junior.salary = 2000;
var senior = new Senior("Maryika", 31);
senior.salary = 4000;
var manager = new Manager("Gosho", 40);
manager.salary = 6000;
manager.dividend = 1000;
junior.work(); // Pesho is working on a simple task.
junior.work(); // Pesho is working on a simple task.
senior.work(); // Maryika is working on a complicated task.
senior.work(); // Maryika is taking time off work.
manager.work(); // Gosho scheduled a meeting.
manager.work(); // Gosho is preparing a quarterly report.
junior.collectSalary(); // Pesho received 2000 this month.
senior.collectSalary(); // Maryika received 4000 this month.
manager.collectSalary(); // Gosho received 7000 this month.
