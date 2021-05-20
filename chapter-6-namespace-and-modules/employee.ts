// Export
// A module can be defined in a separate.ts file which can contain functions, variables, interfaces and classes.
// Use the prefix export with all the definitions you want to include in a module and want to access from other modules.
export let age: number = 20;
export class Employee {
  empCode: number;
  empName: string;
  constructor(name: string, code: number) {
    this.empName = name;
    this.empCode = code;
  }
  displayEmployee() {
    console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
  }
}
let companyName: string = "XYZ";