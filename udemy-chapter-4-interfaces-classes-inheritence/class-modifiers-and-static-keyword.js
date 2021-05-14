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
    function Employee(name) {
        this.empName = name;
    }
    Employee.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var SalesEmployee = /** @class */ (function (_super) {
    __extends(SalesEmployee, _super);
    function SalesEmployee(name, code, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        _this.empCode = code;
        return _this;
    }
    SalesEmployee.prototype.getDetails = function () {
        console.log("Emp Name : ", this.empName);
        console.log("Emp Code : ", this.empCode);
        console.log("Emp Department : ", this.department);
    };
    return SalesEmployee;
}(Employee));
var emp = new SalesEmployee("John Smith", 123, "Sales");
// emp.empCode; //Compiler Error
emp.getDetails();
Employee.salary = 60000;
var sal = Employee.getSalary();
console.log(sal);
