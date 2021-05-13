var Student = /** @class */ (function () {
    function Student(code, name) {
        this.stdCode = code;
        this.name = name;
        this.fees = 15000;
        console.log("Student Code => ", this.stdCode);
        console.log("Name =>", this.name);
    }
    Student.prototype.getFees = function (stdCode) {
        return this.fees;
    };
    return Student;
}());
function printToConsole(param) {
    console.log(param);
}
var std = new Student(1, "Steve");
printToConsole("Fees => " + std.getFees(1));
// console.log(std); Print Object
