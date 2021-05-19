// Numeric Enum
// Enums are always assigned numeric values when they are stored. 
// The first value always takes the numeric value of 0, while the other values in the enum are incremented by 1.
enum PrintMedia {
  Newspaper, // value will be 0
  Newsletter,// value will be 1
  Magazine,// value will be 2
  Book// value will be 3
}
console.log("Numeric Enums => ", PrintMedia);


// We also have the option to initialize the first numeric value ourselves. For example, we can write the same enum as:
enum PrintMedia2 {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book
}

console.log("Numeric Enums with assignment => ", PrintMedia2.Newspaper);

// It is not necessary to assign sequential values to Enum members. They can have any values.

enum PrintMedia3 {
  Newspaper = 1,
  Newsletter = 5,
  Magazine = 5,
  Book = 10
}

console.log("Numeric Enums with random assignment => ", PrintMedia2.Book);


// Enum as Return Type
enum Hobbies {
  Reading,
  Music,
  Dancing,
}

function getMedia(mediaName: string): Hobbies {
  if (mediaName === 'books' || mediaName === 'magazines') {
    return Hobbies.Reading;
  }
  return Hobbies.Dancing;
}

let hobbyType: Hobbies = getMedia('Forbes'); // returns Magazine

console.log("", hobbyType);

// Computed Enums:
enum Keyboard {
  Hp = 1,
  Logitech = getKeyboardCode('logitech'),
  Intex = Logitech * 3,
  IBall = 10
}

function getKeyboardCode(keyboardName: string): number {
  if (keyboardName === 'logitech') {
    return 5;
  }
}

console.log("Keyboard Logitech", Keyboard.Logitech);// returns 5
console.log("Keyboard Intex", Keyboard.Intex);// returns 15

// ===========================================================================================
// String Enum
// ===========================================================================================

enum Users {
  Customer = "Customer",
  Admin = "Admin",
  Staff = "Staff",
  SuperAdmin = "SuperAdmin"
}
// Access String Enum 
console.log("String Enums => ", Users.Customer); //returns Customer
console.log("String Enums Indexer Access => ", Users['SuperAdmin']);//returns SuperAdmin

// ===========================================================================================
// Reverse Mapping
// ===========================================================================================
// Enum in TypeScript supports reverse mapping.
// It means we can access the value of a member and also a member name from its value.

enum MobileCompanies {
  Samsung = 1,
  Lenovo,
  RedMI,
  IPhone
}

console.log("Accessing value => ", MobileCompanies.Samsung);   // output  3
console.log("Accessing value with index => ", MobileCompanies["RedMI"]); // output  3
console.log("Accessing Member Name => ", MobileCompanies[3]);         // output  IPhone