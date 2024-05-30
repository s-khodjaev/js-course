let x;

// Array Literals
const numbers = [13, 134, 54, 6, 89];
const mixed = [true, 'apple', 23, null];

// Array Constructor
const fruits = new Array('pear', 'apple', 'orange');

x = numbers[0];

x = numbers[1] + numbers[3];

x = `My favourite fruit is ${fruits[3]}`;

x = numbers.length;

x = fruits[2] = 'pear';

fruits.length = 2;

x = fruits[fruits.length] = 'blueberrry';

console.log(numbers);
