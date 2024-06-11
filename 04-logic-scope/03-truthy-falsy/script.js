// Truthy and falsy caveats
const children = 0;

if (children !== undefined) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter the number of children');
}

// Checking for empty arrays
const posts = ['Post One', 'Post Two', 'Post Three'];

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}

// Checking for empty objects
const user = {};

if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User To List');
}
