/*
    The cloneNode() method of the Node interface returns a duplicate of the node on which this method was called. Its parameter controls if the subtree contained in a node is also cloned or not.
*/

const myList = document.getElementById('myList');
const listChildren = myList.children;

const bananasItem = listChildren[1];

// console.log(bananasItem);

const bananasCopy = bananasItem.cloneNode(true);

myList.appendChild(bananasCopy);