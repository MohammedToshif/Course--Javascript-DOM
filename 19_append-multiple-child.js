
/* creats this: <li>[text]</li> */


// define function generate list items
function createListItem (text) {
    var li = document.createElement('li');
    li.textContent = text;
    return li;
}


// append child with parent
function appendChildren (parent, children) {
    children.forEach(function (child) {
        parent.appendChild(child);
    });
}


// defining parent
var myList = document.getElementById('my-list');


// defining an array of child element
var items = [
    createListItem('Dom'),
    createListItem('Alex'),
    createListItem('john')
];

// console.log(myList);

// (01) and passing append children function
// appendChildren(myList, items);       // 01 & 02 same work

// (02)
items.forEach(function (li) {
    myList.appendChild(li);
});