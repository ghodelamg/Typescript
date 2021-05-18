// ============================================================================================================
// Generic Interface as Type
// ============================================================================================================

interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kv1: KeyPair<number, string> = { key: 1, value: "Steve" }; // OK
let kv2: KeyPair<number, number> = { key: 1, value: 12345 }; // OK

console.log("Generic Interface as Type =>", kv1, kv2);

//As you can see in the above example, by using generic interface as type, we can specify the data type of key and value.

// ============================================================================================================
// Generic Interface as Function Type
// ============================================================================================================

interface KeyValueProcessor<T, U> {
  (key: T, val: U): void;
};

function processNumKeyPairs(key: number, value: number): void {
  console.log('processNumKeyPairs: key = ' + key + ', value = ' + value)
}

function processStringKeyPairs(key: number, value: string): void {
  console.log('processStringKeyPairs: key = ' + key + ', value = ' + value)
}

let numKVProcessor: KeyValueProcessor<number, number> = processNumKeyPairs;
numKVProcessor(1, 12345); //Output: processNumKeyPairs: key = 1, value = 12345 

let strKVProcessor: KeyValueProcessor<number, string> = processStringKeyPairs;
strKVProcessor(1, "Mukesh"); //Output: processStringKeyPairs: key = 1, value = Bill 

// In the above example, generic interface KeyValueProcessor includes the generic signature of a method without the method name. 
// This will allow us to use any function with the matching signature.
// The generic type will be set at the time of creating a variable such as numKVProcessor and strKVProcessor.


interface IKeyValueProcessor<T, U> {
  process(key: T, val: U): void;
};

class kvProcessor implements IKeyValueProcessor<number, string>
{
  process(key: number, val: string): void {
    console.log(`Key = ${key}, val = ${val}`);
  }
}

let proc: IKeyValueProcessor<number, string> = new kvProcessor();
proc.process(1, 'Mukesh'); //Output: processKeyPairs: key = 1, value = Bill 