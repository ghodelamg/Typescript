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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.display = function () {
        console.log(this.name);
    };
    Person.prototype.displaySalary = function () {
        console.log(this.salary);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code, salary) {
        var _this = _super.call(this, name) || this;
        _this.empCode = code;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.find = function (name) {
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1, 40000);
    };
    return Employee;
}(Person));
var emp = new Employee("James", 100, 50000);
emp.display(); //James
emp.displaySalary();
var emp2 = emp.find('Steve');
console.log(emp2);
// In the above example, Person is an abstract class which includes one property and two methods, one of which is declared as abstract. 
// The find() method is an abstract method and so must be defined in the derived class.
// The Employee class derives from the Person class and so it must define the find() method as abstract.
// The Employee class must implement all the abstract methods of the Person class, otherwise the compiler will show an error.
// Note: The class which implements an abstract class must call super() in the constructor.
