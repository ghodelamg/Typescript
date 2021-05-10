let myName: string = "Mukesh Ghodela";
let age: number = 23;
let hobbies: string[] = ['Reading', 'Travelling', 'Music'];
let officeNumbers: number[] = [351, 588, 81];
let mainOffice: Array<any> = [301, 'First Floor', 'Manager Office', true];
let attendences: boolean[] = [true, false, true, true];
let mixedInfo: [number, string, boolean] = [301, 'First Floor', true];;

enum employeeType {
  Ex,
  Current,
  Freelancer
}

function log(val: any) {
  console.log(val);

}

log(employeeType.Ex);

function empName(): string {
  return 'Mukesh';
}

log(empName());