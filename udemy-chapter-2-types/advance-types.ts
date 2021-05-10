let unionType: string | number;

unionType = "My Name is Mukesh";
unionType = 9;

function addUnions(arg1: number | string, arg2: number | string) {
  return arg1.toString() + arg2.toString();
}

function addUnionsWithMethodType(arg1: number | string, arg2: number | string): number | string {
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

// Type Aliases

type stringOrNumber = string | number;

function addWithAlias(arg1: stringOrNumber, arg2: stringOrNumber) {
  return arg1.toString() + arg2.toString();
}

// Null and undefined
function testNullUndef(test: null | undefined | number) {
  console.log("Test", test);
}

testNullUndef(null);

testNullUndef(undefined);