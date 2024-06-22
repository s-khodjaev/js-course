// Ways to declare a variables
// let, var, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming conventions
// - Only letters, numbers, underscores and dollar signs are allowwed
// can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// fistname = lowercase

// Assigning Variables

let score = 1;

if (true) {
  score = score + 1;
}

console.log(score);

// const arr = [1, 2, 3, 4];
// arr.push(5);
// console.log(arr);

const person = {
  name: 'John',
  age: 30,
};

person.name = 'Mary';
person.name = 'Kevin';

console.log(person.name);

person.email = 'john@example.com';

console.log(person);

// Declare multiple values at once

let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
