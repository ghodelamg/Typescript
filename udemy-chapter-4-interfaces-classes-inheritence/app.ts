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


let empDetail2: IEmployee = {
  empCode: 09, // Octal literals to display code as 07
  empName: "Ramit",
  empDesignation: "SE",
  getSalary: (num) => {
    return num;
  },
  getManagerName: function (name) {
    return name;
  }
};

log(empDetail2);
log(empDetail2.getManagerName("Me"));
log(empDetail2.getSalary(40000));

// Read only Properties
// TypeScript provides a way to mark a property as read only. This means that once a property is assigned a value, it cannot be changed!

interface person {
  name: string,
  age: number,
  readonly adhar_no: string
}
let personObj: person = { name: 'Mukesh', age: 45, adhar_no: "4256 4568 6545" }

personObj.name = 'Mukesh Ghodela'; // OK
personObj.age = 50; // OK
// personObj.adhar_no = '4444 4568 6666'; // Compiler Error


// Interface as Function Type
// TypeScript interface is also used to define a type of a function. This ensures the function signature.

interface KeyValueProcessor {
  (key: number, value: string): void;
};

function addKeyValue(key: number, value: string): void {
  console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

function updateKeyValue(key: number, value: string): void {
  console.log('updateKeyValue: key = ' + key + ', value = ' + value)
}

let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Mukesh'); //Output: addKeyValue: key = 1, value = Bill 

kvp = updateKeyValue;
kvp(2, 'Jenish'); //Output: updateKeyValue: key = 2, value = Steve 