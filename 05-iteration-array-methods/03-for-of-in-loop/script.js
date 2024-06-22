// For ... of loop

// Loop through array
const items = ['book', 'table', 'kite', 'chair'];

for (const item of items) {
  console.log(item);
}

// Loop through object
const users = [
  {
    name: 'Brad',
  },
  {
    name: 'Kate',
  },
  {
    name: 'Steve',
  },
];

for (const user of users) {
  console.log(user.name);
}

// Loop through string
const str = 'Hey everyone';

for (const letter of str) {
  console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'Brad');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key, value);
}

// For in loop

// Loop through objects
const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
};

for (const key in colorObj) {
  console.log(colorObj[key]);
}

// Loop through arrays
const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArr) {
  console.log(colorArr[key]);
}
