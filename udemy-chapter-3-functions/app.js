function log(val) {
    console.log(val);
}
function addNumbers(a, b) {
    return (a + b).toString();
}
// Anonymous Function
//? It indicates optional parameters and these parameters must be last parameters
var addString = function (a, b) {
    return a + b;
};
log(addString("Mukesh", "78945"));
// Default Parameters
function genFullName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Ghodela"; }
    return firstName + " " + lastName;
}
log(genFullName("Mukesh"));
// Rest Parameters
// When the number of parameters that a function will receive is not known or can vary, 
//we can use rest parameters.In JavaScript, this is achieved with the "arguments" variable.
//However, with TypeScript, we can use the rest parameter denoted by ellipsis ....
// We can pass zero or more arguments to the rest parameter. The compiler will create an array of arguments with the rest parameter name provided by us.
function GreetAll(greeting) {
    var restNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restNames[_i - 1] = arguments[_i];
    }
    return greeting + " " + restNames.join(", ");
    ;
}
log(GreetAll("Hello", "Mukesh", "Raj", "Ajay", "Amit"));
//Simplest way function type expression
//The syntax (a: string) => void means “a function with one parameter, named a, of type string, that doesn’t have a return value”. 
//Just like with function declarations, if a parameter type isn’t specified, it’s implicitly any.
function greeter(fn) {
    fn("Hello, World");
}
greeter(log);
// Fat arrow notations are used for anonymous functions i.e for function expressions. 
//They are also called lambda functions in other languages.
var sum = function (x, y) {
    return x + y;
};
log(sum(10, 20)); //returns 30
function add(a, b) {
    return a + b;
}
log(add("Hello ", "Mukesh")); // returns "Hello Steve" 
log(add(10, 20)); // returns 30 
