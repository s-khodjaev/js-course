// Step 1
const library = [
  {
    title: 'Obj1 title',
    author: 'Obj1 author',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Obj2 title',
    author: 'Obj2 author',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Obj3 title',
    author: 'Obj3 author',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
const { title: firstBook } = library[0];

console.log(firstBook);

const str = JSON.stringify(library);

console.log(str);
