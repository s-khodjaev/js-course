// Ways to create objects

// 1. Object Literal
let x;
const todo = {};
todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = true;
// x = todo;

// 2. Object Constructor
const todo2 = new Object();

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 }; // Spread operator
const obj4 = Object.assign({}, obj1, obj2); // Object Assig

const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Eat Apples' },
  { id: 3, name: 'Take out trash' },
];

// x = todos[0].name;

x = Object.keys(todo);
x = Object.values(todo);
x = Object.entries(todo);
x = todo.hasOwnProperty('name');

console.log(x);
