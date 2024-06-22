// Default Params
function registerUser(user = 'Bot') {
  return user + ' is registered';
}

console.log(registerUser());

// Rest Params
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Objects as params
function loginUser(person) {
  return `The ${person.name} with the id of ${person.id} is logged in`;
}

const person = {
  id: 1,
  name: 'John',
};

console.log(loginUser(person));

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([23, 4, 5, 53, 6, 9, 29, 10, 34]);

function getRandom2(arr) {
  const randomIndex2 = Math.floor(Math.random() * arr.length);

  const item2 = arr[randomIndex2];

  return item2;
}

const numbers = [23, 4, 5, 53, 6, 9, 29, 10, 34];

console.log(getRandom2(numbers));
