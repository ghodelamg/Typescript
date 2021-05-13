// Think of Box as a template for a real type, where Type is a placeholder that will get replaced with some other type. 
// When TypeScript sees Box < string >, it will replace every instance of Type in Box < Type > with string, 
// and end up working with something like { contents: string }.In other words, Box < string > and our earlier StringBox work identically.

interface Box<Type> {
  contents: Type;
}
interface StringBox {
  contents: string;
}

let boxA: Box<string> = { contents: "hello" };
boxA.contents;

// (property) Box<string>.contents: string

let boxB: StringBox = { contents: "world" };
boxB.contents;

// (property) StringBox.contents: string