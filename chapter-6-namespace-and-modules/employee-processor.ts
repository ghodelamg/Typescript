// Import
//Importing a Single export from a Module:
import { Employee } from "./Employee";

let empObj = new Employee("Mukesh Ghodela", 1);
empObj.displayEmployee(); //Output: Employee Code: 1, Employee Name: Mukesh Ghodela


// Importing the Entire Module into a Variable

import * as Emp from "./Employee"
console.log("Age =>", Emp.age); // 20

let entireEmpObj = new Emp.Employee("Bill Gates", 2);
entireEmpObj.displayEmployee(); //Output: Employee Code: 2, Employee Name: Bill Gates

// Renaming an Export from a Module:
import { Employee as Associate } from "./Employee"
let obj = new Associate("James Bond", 3);
obj.displayEmployee();//Output: Employee Code: 3, Employee Name: James Bond