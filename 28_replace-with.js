
/* 
    1.) let's you easily replace a node with other nodes
    2.) natively supported on modern browser (except IE)    // internet explore
*/


const pTag = document.querySelector("#example p"); // select first paragrapgh the #id of example

const newInput = document.createElement("input");   // create new input element

newInput.value = "I' m new!";   // set new value inside newInput


const newBtn = document.createElement("button");    // create a new button
newBtn.textContent = "Me too";


// pTag.replaceWith(newInput, newBtn, "And i am some text!"); // jo pehle P tag me value thi wo replace ho jaygi in new value


    // (02)

const newStrong = document.createElement("strong"); // create element

newStrong.textContent = "I am new and strong!"; // set value in element

pTag.childNodes[0].replaceWith(newStrong, "I am just new....");  //para tag ka first child replace hoga new strong se



