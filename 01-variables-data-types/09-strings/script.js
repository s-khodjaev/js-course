let x;

const name = 'John';
const age = 30;

// Template literals
x = `Hello my name is ${name} and my age is ${age}`;

// String Properties and Methods
const s = new String('Hello World');

x = s.length;

// Access value by key
x = s[9];

// Proto
x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('H');

x = s.substring(0, 4);

x = s.substring(7);

x = s.slice(-11, -6);

x = '     HELLO, world';
x = x.trim();

x = s.replace('World', 'John');

x = s.includes('hello');

x = s.valueOf();

x = s.split('');
