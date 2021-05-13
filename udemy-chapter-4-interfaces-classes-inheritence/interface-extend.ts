// Extend Interface
interface IPerson {
  name: string;
  gender: string;
}

interface IEmp extends IPerson {
  empCode: number;
}

let empObj: IEmp = {
  empCode: 1,
  name: "Bill",
  gender: "Male"
}