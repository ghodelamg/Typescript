interface IStudent {
  stdCode: number;
  name: string;
  getFees: (number: number) => number;
}

class Student implements IStudent {
  stdCode: number; // Must implement
  name: string; // Must Implement
  fees: number; // Class's Own Variable

  constructor(code: number, name: string) {
    this.stdCode = code;
    this.name = name;
    this.fees = 15000;
    console.log("Student Code => ", this.stdCode);
    console.log("Name =>", this.name);
  }

  getFees(stdCode: number): number {
    return this.fees;
  }
}

function printToConsole(param: any) {
  console.log(param);
}

let std = new Student(1, "Steve");

printToConsole("Fees => " + std.getFees(1));
// console.log(std); Print Object
