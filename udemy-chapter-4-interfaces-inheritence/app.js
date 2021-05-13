function log(val) {
    console.log(val);
}
// In the above example, the IEmployee interface includes two properties empCode and empName. 
//It also includes a method declaration getSalaray using an arrow function which includes one number parameter and a number return type.
//The getManagerName method is declared using a normal function.
//This means that any object of type IEmployee must define the two properties and two methods.
// let empDetail: IEmployee = { empCode: 12 }; Compile Error : Type '{ empCode: number; }' is missing the following properties from type 'IEmployee': empName, getSalary, getManagerName
var empDetail = {
    empCode: 7,
    empName: "Mukesh",
    getSalary: function (num) {
        return num;
    },
    getManagerName: function (name) {
        return name;
    }
};
log(empDetail);
var empDetail2 = {
    empCode: 09,
    empName: "Ramit",
    empDesignation: "SE",
    getSalary: function (num) {
        return num;
    },
    getManagerName: function (name) {
        return name;
    }
};
log(empDetail2);
log(empDetail2.getManagerName("Me"));
log(empDetail2.getSalary(40000));
var personObj = { name: 'Mukesh', age: 45, adhar_no: "4256 4568 6545" };
personObj.name = 'Mukesh Ghodela'; // OK
personObj.age = 50; // OK
;
function addKeyValue(key, value) {
    console.log('addKeyValue: key = ' + key + ', value = ' + value);
}
function updateKeyValue(key, value) {
    console.log('updateKeyValue: key = ' + key + ', value = ' + value);
}
var kvp = addKeyValue;
kvp(1, 'Mukesh'); //Output: addKeyValue: key = 1, value = Bill 
kvp = updateKeyValue;
kvp(2, 'Jenish'); //Output: updateKeyValue: key = 2, value = Steve 
