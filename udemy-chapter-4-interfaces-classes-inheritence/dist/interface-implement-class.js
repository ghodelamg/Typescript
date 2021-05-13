class Student {
    constructor(code, name) {
        this.stdCode = code;
        this.name = name;
    }
    getFees(stdCode) {
        return 20000;
    }
}
let std = new Student(1, "Steve");
console.log(std);
