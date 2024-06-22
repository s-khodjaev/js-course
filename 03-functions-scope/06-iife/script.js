// IIFE
(function () {
  const user = 'John';
  console.log(user);

  const hello = () => console.log('Hello from IIFE');
  hello();
})();

// Adding params to IIFE
(function (name) {
  console.log('Hello ' + name);
})('Brad');

// Arrow functions
(() => {
  console.log('Hello from IIFE');
})();
