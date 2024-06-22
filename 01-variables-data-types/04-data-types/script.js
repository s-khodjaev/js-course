// String
const firstName = 'John';

// Number
const age = 30;
const float = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
const aptNumberUndefined = null;

// Symbol
const id = Symbol('id');

console.log(firstName, typeof firstName);
console.log(age, typeof age);
console.log(float, typeof float);
console.log(hasKids, typeof hasKids);

// Big Int - really big number with n at the end

// Reference types

// Arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Objects
const person = {
  name: 'John',
  age: 30,
};

// Functions
function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);
