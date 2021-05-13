var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log("Id: " + this.id);
    };
    return SimpleClass;
}());
var mySimpleClass = new SimpleClass();
mySimpleClass.id = 7;
mySimpleClass.print();
