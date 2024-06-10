// 1.
// Simple function
function sayHello() {
  console.log('Hello world');
}

sayHello(); // Calling or invoking a function

// 2.
// Passing an argument to a function
function add(num1, num2) {
  // parameters
  console.log(num1 + num2);
} // Defining and declaring a function

add(5, 3); // arguments

// 3. Function returning
function subtract(num1, num2) {
  return num1 - num2;
}

const result = subtract(5, 3);

console.log(result);

function multiply(num1, num2) {
  return num1 * num2;
}

const multiplyResult = multiply(5, 6);

console.log(multiplyResult);

// Challenge

// const myString = 'developer';

// const myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);
// const myNewString = myString[0].toUpperCase() + myString.substring(1);
// const myNewString = `${myString.charAt(0).toUpperCase()}${myString.slice(1)}`;
// console.log(myNewString);

// let x;

// x = Math.ceil(Math.random() * 10);
// console.log(x);

// const min = 10;
// const max = 20;

// x = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(x);
// const a = 'Hello';
// const fruit = ['apple', 'orange', 'pear', 'peaches'];

// fruit[fruit.length] = 'bananas';

// const arr = [24, 53, 2, 54, 6];

// const arrResult = arr[0] + arr[3];

// console.log(arrResult);

// x = Array.isArray(a);

// console.log(x);

// x = Array.from('12345');

// console.log(x);

// Array challenge 1
// const arr = [1, 2, 3, 4, 5];

// arr.reverse().push(0) + arr.unshift(6);
// console.log(arr);

// Array challenge 2

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// const arr3 = arr1.slice(0, 4).concat(arr2);
// const arr3 = [...arr1, ...arr2];
// arr3.splice(4, 1);

// console.log(arr3);

// const todo = {
//   id: 1,
//   title: 'Take out the trash',
//   user: {
//     name: 'John',
//   },
// };

// const {
//   user: { name },
// } = todo;

// console.log(name);

// const { id: todoID } = todo;

// console.log(todoID);

// const numbers = [10, 20, 30, 40, 50, 60];

// const [firstNumber, secondNumber, ...rest] = numbers;

// console.log(firstNumber, secondNumber);

const obj = {
  name: 'John',
  age: 30,
  city: 'London',
};

const str = JSON.stringify(obj);
console.log(str);

const obj2 = JSON.parse(str);
console.log(obj2);

const library = [
  {
    title: 'Book One',
    author: 'Author One',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Book Two',
    author: 'Author Two',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Book Three',
    author: 'Author Three',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

const str3 = JSON.stringify(library);

console.log(str3);
