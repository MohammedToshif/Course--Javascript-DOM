
const myPara = document.getElementById('myPara');

myPara.classList.add('bold', 'big-font');
myPara.classList.remove('bold');
myPara.classList.replace('big-font', 'red-bg');

myPara.classList.toggle('red-bg');  // bg remove ho jayega
myPara.classList.toggle('red-bg');  // bg waps aa jayga

console.log(myPara.classList.contains('white-text'));   // check krta h wo property h ya nhi

console.log(myPara.classList);