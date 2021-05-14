class Employee {
  public empName: string;
  protected empCode: number;
  static salary: number;

  constructor(name: string) {
    this.empName = name;
  }

  static getSalary() {
    return this.salary;
  }
}

class SalesEmployee extends Employee {
  private department: string;
  constructor(name: string, code: number, department: string) {
    super(name);
    this.department = department;
    this.empCode = code;
  }

  public getDetails() {
    console.log("Emp Name : ", this.empName);
    console.log("Emp Code : ", this.empCode);
    console.log("Emp Department : ", this.department);
  }
}

let emp = new SalesEmployee("John Smith", 123, "Sales");
// emp.empCode; //Compiler Error
emp.getDetails();

Employee.salary = 60000;
let sal = Employee.getSalary();
console.log(sal);