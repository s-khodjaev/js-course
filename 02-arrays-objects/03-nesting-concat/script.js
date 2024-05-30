let x;

const fruits = ['apple', 'orange', 'pear'];
const berries = ['strawberry', 'raspberry', 'blueberry'];

// Nesting Arrays (array within an array)
// fruits.push(berries);

// Accesing raspberry (array within an array
// x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];

// Combining arrays as one array (Concatenating)
x = fruits.concat(berries);

// Spread operator (...). Also combines arrays into one array
x = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 6, [89, 34], 8];
x = arr.flat();

// Static Methods on Array Object
x = Array.isArray(fruits);

x = Array.from('12345'); // Create an array from string

// Putting values into an array
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
