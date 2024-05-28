// These values are stored in the stack

const name = 'John';
const age = 30;

// Reference values are stored in the heap
const person = {
  name: 'Brad',
  age: 40,
};

let newName = name;
newName = 'Jonathan';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(name, newName);

console.log(person, newPerson);
