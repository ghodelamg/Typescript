function log(val: any): void {
  console.log(val);
}

interface IEmployee {
  empCode: number;
  empName: string;
  empDesignation?: string; // This is optional
  getSalary: (number: any) => number; // arrow function
  getManagerName(string: any): string;
}

// In the above example, the IEmployee interface includes two properties empCode and empName. 
//It also includes a method declaration getSalaray using an arrow function which includes one number parameter and a number return type.
//The getManagerName method is declared using a normal function.
//This means that any object of type IEmployee must define the two properties and two methods.

// let empDetail: IEmployee = { empCode: 12 }; Compile Error : Type '{ empCode: number; }' is missing the following properties from type 'IEmployee': empName, getSalary, getManagerName

let empDetail: IEmployee = {
  empCode: 0o7, // Octal literals to display code as 07
  empName: "Mukesh",
  getSalary: (num) => {
    return num;
  },
  getManagerName: function (name) {
    return name;
  }
};

log(empDetail);