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
