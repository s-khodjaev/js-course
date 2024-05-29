// let d;

// d = new Date();

// d = d.toString();

// d = new Date('2021-07-10T12:30:32');

// console.log(d);

let x;
let d = new Date();

x = d.getFullYear();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default');

console.log(x);
