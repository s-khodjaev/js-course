// console.log(document.body.innerText);
// console.log(document.links[0]);

// document.body.innerHTML = '<h1>Hello World!</h1>';

// console.log(document.getElementById('main'));
// const main = document.getElementById('main');
// main.innerHTML = '<h1>Hello World!</h1>';

// document.querySelector('#main h1').innerText = 'Hello World';

// document.getElementById('app-title').title = 'Shopping';
// document.getElementById('app-title').setAttribute('class', 'title');

// const title = document.getElementById('app-title');

// // Get or change content
// console.log(title);
// title.textContent = 'Hello World';
// title.innerText = 'Hello again!';
// title.innerHTML = '<strong>Shopping List</strong>';

// // Change styles
// title.style.color = 'red';
// title.style.backgroundColor = 'black';
// title.style.padding = '10px 20px';

// document.querySelector()
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('input[type="text'));
// console.log(document.querySelector('li:nth-child(2)').innerText);

// const secondItem = document.querySelector('li:nth-child(2)');
// secondItem.innerText = 'Apple Juice';
// secondItem.style.color = 'red';

// // Use these methods on other elements
// const list = document.querySelector('ul');
// console.log(list);
// const firstItem = list.querySelector('li');
// firstItem.style.color = 'green';

// querySelectorAll()

const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);

// listItems[1].style.color = 'green';

// listItems.forEach((item) => {
//   item.style.color = 'teal';
// });

// listItems.forEach((item, index) => {
//   item.style.color = 'red';

//   if (index === 0) {
//     item.remove();
//   }

//   if (index === 1) {
//     item.innerHTML = `Mango Juice
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//   }
// });

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText);
