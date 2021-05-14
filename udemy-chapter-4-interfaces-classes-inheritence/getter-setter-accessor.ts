class A {
  private _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}

let clsA = new A();
clsA.length = 10;

// If you have a getter without a setter, the field is automatically readonly
// It is not possible to have accessors with different types for getting and setting.
// To implement accessor -> propert must be defined with underscore and outside class we have to use it without underscore
// Private field can be accessible outside the class if getter and setter exists