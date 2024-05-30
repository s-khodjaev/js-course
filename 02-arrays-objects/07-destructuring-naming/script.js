const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Desctructuring

const todo = {
  id: 1,
  title: 'Buy Milk',
  user: {
    name: 'Mary',
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(todoId);

// Destructure arrays
const numbers = [33, 2, 34, 64, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
