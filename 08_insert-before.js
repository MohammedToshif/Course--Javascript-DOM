/* with elements you can insert a new elements 
inside a parent element before a perticular element in the child list...


The insertBefore() method of the Node interface inserts a node before a reference node as a child of a specified parent node.

*/

const myList = document.getElementById('myList');
const pearsItem = document.getElementById('pearsItem');

console.log(myList)
console.log(pearsItem)

const orangesItem = document.createElement('li');
orangesItem.textContent = 'Oranges';

myList.insertBefore(orangesItem,pearsItem)


// opposite to appendChild

function addToBeginning(parent, toInsert) {
    const firstChild = parent.firstChild;
    parent.insertBefore(toInsert, firstChild);
}

addToBeginning(myList, orangesItem);