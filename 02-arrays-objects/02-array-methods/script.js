let x;

const arr = [23, 32, 5, 60, 29];

arr.push(34);

arr.pop();

arr.unshift(99);

arr.shift();

arr.reverse();

x = arr.includes(23);

x = arr.indexOf(23);

x = arr.slice(1, 3);

x = arr.splice(1, 3);

// Remove a single element from the array
x = arr.splice(3, 1);

// Chaining methods
x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x);
