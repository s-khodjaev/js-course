const age = 13;

// if (age >= 18) {
//   console.log('You can vote');
// } else {
//   console.log('You can not vote');
// }

age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

console.log(canVote);
console.log(canVote2);

// Multiple statements

const auth = true;
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Please log in');
//   redirect = '/login';
// }

// const redirect = auth
//   ? (alert('Welcome'), '/dashboard')
//   : (alert('Access denied'), '/login');

// console.log(redirect);

// if there is no else statement
// auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashboard');
