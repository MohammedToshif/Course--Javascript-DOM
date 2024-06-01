
const myList = document.getElementById('myList');
const listChildren = myList.children;

const bananasItem = listChildren[1];

// console.log(bananasItem);

const bananasCopy = bananasItem.cloneNode(true);

myList.appendChild(bananasCopy);