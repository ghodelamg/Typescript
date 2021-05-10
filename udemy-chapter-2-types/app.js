var myName = "Mukesh Ghodela";
var age = 23;
var hobbies = ['Reading', 'Travelling', 'Music'];
var officeNumbers = [351, 588, 81];
var mainOffice = [301, 'First Floor', 'Manager Office', true];
var attendences = [true, false, true, true];
var mixedInfo = [301, 'First Floor', true];
;
var employeeType;
(function (employeeType) {
    employeeType[employeeType["Ex"] = 0] = "Ex";
    employeeType[employeeType["Current"] = 1] = "Current";
    employeeType[employeeType["Freelancer"] = 2] = "Freelancer";
})(employeeType || (employeeType = {}));
function log(val) {
    console.log(val);
}
log(employeeType.Ex);
function empName() {
    return 'Mukesh';
}
log(empName());
