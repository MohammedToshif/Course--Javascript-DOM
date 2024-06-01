
const myDiv = document.getElementById('myDiv');

myDiv.dataset.name = 'Bob';
myDiv.dataset.startedCodingAt = 8;

myDiv.dataset.name = '';

myDiv.removeAttribute('data-name');     // name property remove ho jayegi

console.log(myDiv.dataset);