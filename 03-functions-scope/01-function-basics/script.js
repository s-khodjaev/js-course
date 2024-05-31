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
