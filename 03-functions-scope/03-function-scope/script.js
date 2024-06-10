// const x = 100;

// if (true) {
//   console.log(x);
//   const y = 200;

//   console.log(x + y);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// if (true) {
//   const a = 500;
//   let b = 600;
//   var c = 700;
// }

// console.log(c);

// function run() {
//   var x = 100;
//   console.log(x);
// }

// run();

// Nested Scope
function first() {
  const x = 400;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  second();
}

first();

if (true) {
  const d = 30;

  if (d === 30) {
    const e = 40;
    console.log(d + e);
  }
}
