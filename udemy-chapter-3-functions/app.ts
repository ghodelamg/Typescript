function log(val: any): void {
  console.log(val);
}

function addNumbers(a: number, b: number): string {
  return (a + b).toString();
}

// Anonymous Function
//? It indicates optional parameters and these parameters must be last parameters
let addString = function (a: string, b?: string): string {
  return a + b;
}

log(addString("Mukesh", "78945"));

// Default Parameters

function genFullName(firstName: string, lastName: string = "Ghodela") {
  return firstName + " " + lastName;
}

log(genFullName("Mukesh"));

// Rest Parameters
// When the number of parameters that a function will receive is not known or can vary, 
//we can use rest parameters.In JavaScript, this is achieved with the "arguments" variable.
//However, with TypeScript, we can use the rest parameter denoted by ellipsis ....
// We can pass zero or more arguments to the rest parameter. The compiler will create an array of arguments with the rest parameter name provided by us.

function GreetAll(greeting: string, ...restNames: string[]) {
  return greeting + " " + restNames.join(", ");;
}

log(GreetAll("Hello", "Mukesh", "Raj", "Ajay", "Amit"));

//Simplest way function type expression
//The syntax (a: string) => void means “a function with one parameter, named a, of type string, that doesn’t have a return value”. 
//Just like with function declarations, if a parameter type isn’t specified, it’s implicitly any.

function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

greeter(log);

// Fat arrow notations are used for anonymous functions i.e for function expressions. 
//They are also called lambda functions in other languages.
let sum = (x: number, y: number): number => {
  return x + y;
}

log(sum(10, 20)); //returns 30


//Function Overloading
function add(a: string, b: string): string;

function add(a: number, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}

log(add("Hello ", "Mukesh")); // returns "Hello Steve" 
log(add(10, 20)); // returns 30 