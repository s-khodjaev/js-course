// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
  return a + b;
};

// Shorter version (Implicit Return)
const add2 = (a, b) => a + b;

// Returning an object
const person = () => ({
  name: 'John',
});

console.log(add(2, 4));
console.log(add2(2, 5));
console.log(person());

const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(function (n) {
  console.log(n);
});
