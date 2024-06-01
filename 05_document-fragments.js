
// document fregment :- it is a vertual, invisible HTML element

/*
    Document Fragment;
    <h1>Title</h1>
    <span>Some text here</span>


    <li>Apples</li>
    <li>Bananas</>
*/


const myList = document.getElementById('myList');
const docFrag = document.createDocumentFragment();

let item1 = document.createElement('li');
let item2 = document.createElement('li');

item1.textContent = 'Apples';
item2.textContent = 'Bananas';

docFrag.appendChild(item1);
docFrag.appendChild(item2);

// console.log(docFrag);

myList.appendChild(docFrag);

console.log(docFrag);
