abstract class Person {
  name: string;
  abstract salary: number;

  constructor(name: string) {
    this.name = name;
  }

  display(): void {
    console.log(this.name);
  }

  displaySalary() {
    console.log(this.salary);
  }

  abstract find(name: string): Person;
}

class Employee extends Person {
  empCode: number;
  salary: number;

  constructor(name: string, code: number, salary?: number) {
    super(name); // must call super()
    this.empCode = code;
    this.salary = salary
  }

  find(name: string): Person {
    // execute AJAX request to find an employee from a db
    return new Employee(name, 1, 40000);
  }
}

let emp: Person = new Employee("James", 100, 50000);
emp.display(); //James
emp.displaySalary();

let emp2: Person = emp.find('Steve');

console.log(emp2);

// In the above example, Person is an abstract class which includes one property and two methods, one of which is declared as abstract. 
// The find() method is an abstract method and so must be defined in the derived class.
// The Employee class derives from the Person class and so it must define the find() method as abstract.
// The Employee class must implement all the abstract methods of the Person class, otherwise the compiler will show an error.
// Note: The class which implements an abstract class must call super() in the constructor.