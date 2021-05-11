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
