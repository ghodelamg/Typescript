var unionType;
unionType = "My Name is Mukesh";
unionType = 9;
function addUnions(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
function addUnionsWithMethodType(arg1, arg2) {
    if (typeof arg1 === "string") {
        console.log("String Type");
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        console.log("Number Type");
        return arg1 + arg2;
    }
    return arg1.toString() + arg2.toString();
}
function addWithAlias(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
// Null and undefined
function testNullUndef(test) {
    console.log("Test", test);
}
testNullUndef(null);
testNullUndef(undefined);
