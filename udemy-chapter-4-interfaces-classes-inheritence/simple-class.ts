// A class can include the following:

// Constructor
// Properties
// Methods
class SimpleClass {
  public id: number
  print(): void {
    console.log("Id: " + this.id);
  }
}

let mySimpleClass = new SimpleClass();

mySimpleClass.id = 0o7;

mySimpleClass.print();