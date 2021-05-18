// TypeScript supports generic classes. The generic type parameter is specified in angle brackets after the name of the class.
// A generic class can have generic fields(member variables) or methods.
class KeyValuePair<T, U>
{
  private key: T;
  private val: U;

  setKeyValue(key: T, val: U): void {
    this.key = key;
    this.val = val;
  }

  display(): void {
    console.log(`Key = ${this.key}, val = ${this.val}`);
  }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Mukesh");
kvp1.display(); //Output: Key = 1, Val = Steve 

let kvp2 = new KeyValuePair<string, string>();
kvp2.setKeyValue("CEO", "Mukesh");
kvp2.display(); //Output: Key = CEO, Val = Bill

// In the above example, we created a generic class named KeyValuePair with a type variable in the angle brackets <T, U>. 
// The KeyValuePair class includes two private generic member variables and a generic function setKeyValue that takes two input arguments of type T and U.
// This allows us to create an object of KeyValuePair with any type of key and value.

// ========================================================================================================
// Generic Class implements Generic Interface
// ========================================================================================================
interface IKeyValueProcessor<T, U> {
  process(key: T, val: U): void;
};

class kvProcessor<T, U> implements IKeyValueProcessor<T, U>
{
  process(key: T, val: U): void {
    console.log(`Key = ${key}, val = ${val}`);
  }
}

let proc: IKeyValueProcessor<number, string> = new kvProcessor();
proc.process(1, 'Mukesh'); //Output: key = 1, value = Bill 