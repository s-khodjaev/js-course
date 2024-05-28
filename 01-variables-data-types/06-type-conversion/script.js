let amount = 'hello';

// Convert string to number

// 1. ParseInt function
amount = parseInt(amount);
// 2. Unary (+) operator
amount = +amount;
// 3. Number method
amount = Number(amount);

// Convert number to string
// 1. toString method
amount = amount.toString();
// 2. String method
amount = String(amount);

// Convert string to decimal
// 1. parseFloat method
amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);
