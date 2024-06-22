// const div = document.createElement('div');
// div.className = 'my-element';
// div.id = 'my-element';
// div.setAttribute('title', 'My Element');

// // div.innerText = 'Hello World';

// const text = document.createTextNode('Hello World');
// div.appendChild(text);

// // document.body.appendChild(div);

// document.querySelector('ul').appendChild(div);

// const div = document.createElement('div');
// div.className = 'my-element';
// div.id = 'my-element';
// div.setAttribute('title', 'My Element');

// const text = document.createTextNode('Hey everybody');
// div.appendChild(text);

// // document.body.appendChild(div);

// document.querySelector('ul').appendChild(div);

// Adding items to a shopping list

// Way 1: Quick and Dirty

function createListItem(item) {
  const li = document.createElement('li');

  li.innerHTML = `${item}<button class="remove-item btn-link text-red"><i class="fa-solid fa-xmark"></i></button>`;

  document.querySelector('ul').appendChild(li);
}

createListItem('Apple');

// Way 2: Clean & Performant

function createListItemClean(item) {
  const li = document.createElement('li');
  const text = document.createTextNode(item);
  const btn = document.createElement('button');

  document.querySelector('ul').appendChild(li);
  li.appendChild(text);
  btn.className = 'remove-item btn-link text-red';
  btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  li.appendChild(btn);
}

createListItemClean('Banana');

// Way 3

function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';
  button.appendChild(icon);

  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

createNewItem('Mangoes');
