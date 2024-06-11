// For Loop
// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log('7 is my lucky number');
//   } else {
//     console.log('Number ' + i);
//   }
// }

// Nested Loops
// for (let i = 1; i <= 10; i++) {
//   console.log('Number ' + i);

//   for (let j = 1; j <= 3; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Loop through an array
// const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

// for (let i = 0; i < names.length; i++) {
//   if (names[i] === 'Sara') {
//     console.log('Sara is the best');
//   } else {
//     console.log(names[i]);
//   }
// }

// Break
// for (let i = 0; i <= 20; i++) {
//   if (i === 15) {
//     console.log('Breaking...');
//     break;
//   }

//   console.log(i);
// }

// Continue
// for (let i = 0; i <= 20; i++) {
//   if (i === 15) {
//     console.log('Skipping 15...');
//     continue;
//   }

//   console.log(i);
// }

// While loop
let i = 0;

// while (i <= 20) {
//   console.log('Number ' + i);
//   i++;
// }

// Loop over arrays
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// Nesting while loops
// while (i < 5) {
//   console.log('Number ' + i);

//   let j = 1;

//   while (j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }

//   i++;
// }

// Do While loop

do {
  console.log('Number ' + i);
  i++;
} while (i < 20);
